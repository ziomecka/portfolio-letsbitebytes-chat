import {
  MongoDB,
  createMongo,
} from '../../databases/mongo/';
import {
  encode as escapeHtml,
  decode as unescapeHtml,
} from 'he';
import { UserError } from '../user-error';
import { logger } from '../../logger/';

const log = logger('userDatabase');

interface CreateUserProps {
  login: string;
  password: string;
  salt: string;
  hash: string;
}

export class UserDatabase {
  constructor (private database: MongoDB) {
  }

  public async disconnect (): Promise<boolean> {
    try {
      await this.database.disconnect.bind(this.database)();
      return true;
    } catch {
      return false;
    }
  }

  public async createUser ({ login, password, salt, hash }: CreateUserProps): Promise<boolean> {
    try {
      const userExists = await this.database.exists(Collections.users, { login });

      if (userExists) {
        return Promise.reject(new UserError(UserErrors.userExists));
      }

      await this.database.create(Collections.users, { login, password, salt, hash });
      log.info('User created:', login, password);
      return true;
    } catch (err) {
      log.error('User create error:', login, password, err);
      return err;
    }
  }

  public async getUsers (): Promise<UserDocument[]> {
    try {
      const result = await this.database.find(Collections.users);
      log.info('Users retrieved from database');
      return result;
    } catch (err) {
      log.error('Users not retrieved from database:', err);
      return Promise.reject(err);
    }
  }

  public async getUsersLogins (): Promise<string[]> {
    try {
      const result = await this.getUsers();
      return result.map(userDocument => userDocument.login);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  public async findUser (login: string): Promise<UserDocument> {
    try {
      const result = await this.database.findOne(Collections.users, { login });
      log.info('User found:', login);
      return result;
    } catch (err) {
      log.error('User not found:', login, err);
      return Promise.reject(err);
    }
  }

  public async deleteUsers (): Promise<boolean> {
    try {
      const result = await this.database.delete(Collections.users);
      log.info('Users deleted');
      return result;
    } catch (err) {
      log.error('Users not deleted:', err);
      return Promise.reject(err);
    }
  }

  private findConversation (user: UserDocument, login: string): Statement[] {
    const { conversations = [] }: { conversations: ConversationDocument[] } = user;
    const conversationDocument = conversations.find(({ login: conLogin }) => conLogin === login);
    if (conversationDocument) {
      return conversationDocument.conversation;
    }
    return null;
  }

  public async storeMessage (
    login: string, to: string, [ messageId, message, isDelivered ]: Statement
  ): Promise<UserDocument> {
    try {
      const user = await this.database.findOne(Collections.users, { login });
      const conversation = this.findConversation(user, to);

      // unescape before escaping to avoid double escaping
      // I assume that either safe or unsafe data may come from the front
      const statement = [
        messageId,
        escapeHtml(unescapeHtml(message)),
        isDelivered,
      ] as Statement;

      if (conversation) {
        conversation.push(statement);
      } else {
        user.conversations.push({
          login: to,
          conversation: [statement],
        });
      }

      const result = await user.save();
      log.info('Message stored:', login, to, message[ 0 ]);

      return result;
    } catch (err) {
      log.error('Message not stored:', login, to, message[ 0 ], err);
      return Promise.reject(err);
    }
  }

  public async update (login:string, data: Partial<UserDocument>): Promise<UserDocument> {
    let user: UserDocument;

    try {
      user = await this.database.findOne(Collections.users, { login });
    } catch (err) {
      log.error(
        'User not updated, user not found:', login, data
      );
      return Promise.reject(err);
    }

    try {
      Object.assign(user, data);
      const result = await user.save();
      log.info('User updated:', login, data);
      return result;
    } catch (err) {
      log.error('User not updated:', login, data, err);
      return Promise.reject(err);
    }
  }

  public async updateMessage (
    login: string, to: string, messageId: string
  ): Promise<UserDocument> {
    let user: UserDocument;

    try {
      user = await this.database.findOne(Collections.users, { login });
    } catch (err) {
      log.error(
        'Conversation not updated as delivered, user not found:',
        login, to, messageId, err
      );
      return Promise.reject(err);
    }

    const conversation = this.findConversation(user, to);

    if (conversation) {
      const index = conversation.findIndex(([id]: Statement) => (
        id === messageId
      ));

      if (index !== -1) {
        const [ messageId, message, delivered ] = conversation[ index ];

        // no need to unescape as data comes from the database
        const newMessage: Statement =
          (delivered !== undefined)
            ? [ messageId, message, true ]
            : [ messageId, message ];

        conversation.splice(index, 1, newMessage);

        try {
          const result = await user.save();
          log.info('Conversation updated as delivered:', login, to, messageId);
          return result;
        } catch (err) {
          log.error('Conversation not updated as delivered:', login, to, messageId, err);
          return Promise.reject(err);
        }
      } else {
        return Promise.reject(new UserError(UserErrors.messageNotFound));
      }
    } else {
      return Promise.reject(new UserError(UserErrors.conversationNotFound));
    }
  }
}

export const createUserDatabase = (uri: string): UserDatabase => {
  return new UserDatabase(createMongo(uri));
};
