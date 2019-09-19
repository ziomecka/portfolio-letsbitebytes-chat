import * as mongoose from 'mongoose';
import { logger } from '../../logger';
import { models } from './models';

const log = logger();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export class MongoDB {
  private connection?: MongooseConnection;
  private models: Map<Collections, MongooseModel<MongooseDocument>>;
  constructor (private uri: string) {
    this.connection = undefined;
    this.models = models;
    this.connect();
  }

  private connect = async (): Promise<void> => {
    await mongoose.connect(this.uri, options, (err: Error) => {
      if (err) {
        return log.error('Mongo connection error:', err);
      }
      return log.info('Mongo connected');
    });

    const connection = this.connection = mongoose.connection;

    connection.on('error', (err: Error) => log.error('Mongo connection error:', err));
    connection.on('open', () => log.info('Mongo opened'));
    connection.on('disconnected', () => log.info('Mongo disconnected'));
    connection.on('reconnected', () => log.info('Mongo reconnected'));
    connection.on('close', () => log.info('Mongo closed'));
  };

  public disconnect = async (): Promise<void> => {
    return await this.connection.close();
  };

  public async create (collection: Collections, data: unknown): Promise<MongooseDocument> {
    return new Promise((resolve, reject): void => {
      const Document = this.models.get(collection);
      const document = new Document(data);

      document.save((err: Error, result: MongooseDocument) => {
        err ? reject(err) : resolve(result);
      });
    });
  }

  public async findOne (collection: Collections, data: unknown): Promise<MongooseDocuments> {
    return new Promise((resolve, reject): void => {
      const Document = this.models.get(collection);

      Document.findOne(data, (err: Error, result: MongooseDocuments) => {
        err ? reject(err) : resolve(result);
      });
    });
  }

  public async find (collection: Collections, query?: unknown): Promise<MongooseDocuments[]> {
    return new Promise((resolve, reject): void => {
      const Document = this.models.get(collection);

      Document.find(query, (err: Error, result: MongooseDocuments[]) => {
        err ? reject(err) : resolve(result);
      });
    });
  }

  public async delete (collection: Collections, query?: unknown): Promise<boolean> {
    return new Promise((resolve, reject): void => {
      const Document = this.models.get(collection);

      Document.remove(query, (err: Error) => {
        if (err) reject(err);
        resolve(true);
      });
    });
  }

  public async exists (collection: Collections, data: unknown): Promise<boolean> {
    const Document = this.models.get(collection);
    return await Document.exists(data);
  };
}

export const mongoDB = new MongoDB();
