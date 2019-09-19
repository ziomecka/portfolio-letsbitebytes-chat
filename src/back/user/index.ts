import {
  Authorization,
  authorization,
} from './authorization/';
import {
  UserCache,
  userCache,
} from './cache';
import {
  UserDatabase,
  createUserDatabase,
} from './database';
import {
  UserSession,
  userSession,
} from './session';
import { UserError } from './user-error';
import { logger } from '../logger/';

const log = logger('user');

class User {
  private authorization: Authorization;
  private userCache: UserCache;
  private userDatabase: UserDatabase;
  private userSession: UserSession;
  constructor () {
    this.authorization = authorization;
    this.userCache = userCache;
    this.userSession = userSession;
    this.userDatabase = createUserDatabase(databaseUri);
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

      this.userCache.cacheUser(login);

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

      const { hash, salt, isValid } =
      this.authorization.verifyPassword(storedHash, storedSalt, password);

      if (isValid) {
        log.info('User verified:', login, isValid);

        return {
          isValid,
          hash,
          salt,
          role,
          // todo do it on client side
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

  private async getUsers (login?: string): Promise<string[]> {
    let users: string[];

    try {
      users = await this.userCache.getUsers();
      log.info('Users\' list read from cache');
    } catch (err) {
      log.error('Users\' list not read from cache', err);
      users = [];
    }

    // todo: do it on client side?
    if (login && users.length) {
      const index = users.findIndex(userLogin => userLogin === login);
      index !== -1 && users.splice(index, 1);
    }

    return users;
  }

  public async buildAsyncState (): Promise<AsyncInitialAppState> {
    return {};
  }

  public async login (login: string, password: string): Promise<ApiResponse> {
    const response = {
      result: false,
      data: {
        role: 'unknown',
        users: [] as string[],
      },
    } as ApiResponse;

    try {
      const { isValid, role, conversations } = await this.verifyPassword(login, password);

      response.result = isValid;
      response.data.role = role;
      response.data.conversations = conversations;
      response.data.users = await this.getUsers(login);

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
}

export const user = new User();
