import {
  Authorization,
  authorization,
} from './authorization/';
import {
  UserDatabase,
  createUserDatabase,
} from './database';
import {
  UserSession,
  createUserSession,
} from './session';
import { Redis } from '../databases';
import { UserError } from './user-error';
import { UsersCache } from './cache';
import { logger } from '../logger/';

const log = logger('userSession');

export class User {
  public readonly authorization: Authorization;
  public readonly usersCache: UsersCache;
  public readonly userDatabase: UserDatabase;
  public readonly userSession: UserSession;
  constructor (databaseUri: string, cacheUri: string) {
    this.authorization = authorization;
    this.userSession = createUserSession(cacheUri);
    this.userDatabase = createUserDatabase(databaseUri);

    const redis = new Redis(cacheUri);
    this.usersCache = new UsersCache(redis);
  }

  public async destroy (): Promise<boolean[]> {
    return Promise.all([
      await this.usersCache.disconnect(),
      await this.userDatabase.disconnect(),
      await this.userSession.disconnect(),
    ]);
  }

  private isValidLogin (login: string): boolean {
    return !!login;
  }

  private isValidPassword (password: string, confirmPassword: string): boolean {
    return (
      !!password &&
      !!confirmPassword &&
      password === confirmPassword
    );
  }

  public async createUser (
    login: string, password: string, confirmPassword: string
  ): Promise<boolean> {
    if (!this.isValidLogin(login)) {
      return Promise.reject(new UserError(UserErrors.incorrectLogin));
    }

    if (!this.isValidPassword(password, confirmPassword)) {
      return Promise.reject(new UserError(UserErrors.incorrectPassword));
    }

    try {
      const { hash, salt } = this.authorization.encryptPassword(password);

      const storedInDatabase = await this.userDatabase.createUser({ login, password, salt, hash });

      await this.usersCache.createUser(login);

      log.info('User stored in database:', login);

      return storedInDatabase;
    } catch (err) {
      log.error('User not stored in database:', login, err);
      return Promise.reject(
        (err instanceof UserError)
          ? err
          : new UserError(UserErrors.unknown)
      );
    }
  }

  // todo do it on client side
  private buildConversations (conversations: ConversationDocument[] = []): Conversations {
    return conversations.reduce((result: Conversations, conversation: ConversationDocument) => {
      result[ conversation.login ] = conversation.conversation;
      return result;
    }, {});
  }

  private async verifyPassword (login: string, password: string): Promise<LoginInitialData> {
    try {
      const {
        hash: storedHash,
        salt: storedSalt,
        conversations,
        role,
      } = await this.userDatabase.findUser(login);

      const { hash, salt, isValid, token } =
      this.authorization.verifyPassword(storedHash, storedSalt, password);

      if (isValid) {
        log.info('User verified:', login, isValid);

        return {
          isValid,
          hash,
          salt,
          role,
          token,
          conversations: this.buildConversations(conversations),
        };
      }

      log.info('User not verified:', login, isValid);
      return { isValid };
    } catch (err) {
      log.error('User verified:', login, err);
      return Promise.reject({
        error: (err instanceof UserError) ? err : new UserError(UserErrors.unknown),
      });
    }
  }

  private async getUsers (): Promise<GetUsersFromCache> {
    return await this.usersCache.getUsers();
  }

  public async buildAsyncState (): Promise<AsyncInitialAppState> {
    return {};
  }

  public async login (login: string, password: string): Promise<ApiResponse & { token?: string }> {
    const response = {
      result: false,
      data: {
        role: 'unknown',
        users: [] as string[],
      },
    } as ApiResponse & { token?: string };

    try {
      const { isValid, role, conversations, token } = await this.verifyPassword(login, password);

      response.data.logout = await this.logout(login);

      await this.storeSession(login, token);

      const { activeUsers, allUsers } = await this.getUsers();

      response.result = isValid;
      response.token = token;
      response.data.role = role;
      response.data.conversations = conversations;
      response.data.contacts = allUsers;
      response.data.activeContacts = activeUsers;

      log.info('User logged in:', login);
    } catch (err) {
      log.error('User not logged in:', login, err);
      response.error = err;
    }

    return response;
  }

  public async storeMessage (
    from: string, to: string, [ messageId, message ]: [ string, string ]
  ): Promise<boolean> {
    try {
      await this.userDatabase.storeMessage(from, to, [ messageId, message, false ]);
      await this.userDatabase.storeMessage(to, from, [ messageId, message ]);

      // todo what if one fails?
      log.info('User\'s message registered:', from, to, messageId);
      return true;
    } catch (err) {
      log.error('User\'s message not registered:', from, to, messageId, err);
      return false;
    }
  }

  public async updateMessage (
    login: string, to: string, messageId: string
  ): Promise<boolean> {
    try {
      await this.userDatabase.updateMessage(login, to, messageId);
      log.info('User\'s message registered as delivered:', login, to, messageId);
      return true;
    } catch (err) {
      log.error('User\'s message not registered as delivered:', login, to, messageId, err);
      return false;
    }
  }

  public async update (
    login: string,
    data: Partial<UserDocument> & { password?: string }
  ): Promise<boolean> {
    if ('password' in data) {
      Object.assign(data, this.authorization.encryptPassword(data.password));
    }

    try {
      await this.userDatabase.update(login, data);
      log.info('User updated:', login, data);
      return true;
    } catch (err) {
      log.error('User not updated:', login, data, err);
      return false;
    }
  }

  public async storeSession (login: string, value: string): Promise<boolean> {
    try {
      return await this.userSession.storeSession(login, value);
    } catch (err) {
      log.error('Session not stored', login, value, err);
      return false;
    }
  }

  public async logout (login: string): Promise<boolean> {
    let session: string;

    try {
      session = await this.userSession.getSession(login);

      if (session) {
        await this.userSession.deleteSession(session, login);
      }

      return !!session;
    } catch (err) {
      log.error('User not logged out', login, session, err);
      return false;
    }
  }

  public isAuthenticated = async (login: string, cookie: string): Promise<boolean> => {
    try {
      const loginResult = await this.userSession.getSession(login);
      const cookieResult = await this.userSession.getSession(cookie);

      log.info('User is authenticated', loginResult, cookieResult);

      return !!loginResult && !!cookieResult;
    } catch (err) {
      log.error('User is not authenticated', login, cookie, err);
      return false;
    }
  }
}

export const createUserManager = (databaseUri: string, cacheUri: string): User => (
  new User(databaseUri, cacheUri)
);

export {
  Authorization,
  UsersCache,
  UserDatabase,
};
