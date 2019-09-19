import * as mongoose from 'mongoose';
import { MONGO_URI } from '../../constants';
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
  constructor () {
    this.connection = undefined;
    this.models = models;
    this.connect();
  }

  private connect = async (): Promise<void> => {
    await mongoose.connect(MONGO_URI, options, (err: MongooseError) => {
      if (err) {
        return log.error('Mongo connection error:', err);
      }
      return log.info('Mongo connected');
    });

    this.connection = mongoose.connection;

    this.connection.on('error', (err: MongooseError) => {
      log.error('Mongo connection error:', err);
      this.connect(); // todo this way?
    });

    this.connection.on('open', () => {
      log.info('Mongo opened');
    });
  };

  public async create (collection: Collections, data: unknown): Promise<MongooseDocument> {
    return new Promise((resolve, reject): void => {
      const Document = this.models.get(collection);
      const document = new Document(data);

      document.save((err: MongooseError, result: MongooseDocument) => {
        err ? reject(err) : resolve(result);
      });
    });
  }

  public async findOne (collection: Collections, data: unknown): Promise<MongooseDocuments> {
    return new Promise((resolve, reject): void => {
      const Document = this.models.get(collection);

      Document.findOne(data, (err: MongooseError, result: MongooseDocuments) => {
        err ? reject(err) : resolve(result);
      });
    });
  }

  public async exists (collection: Collections, data: unknown): Promise<boolean> {
    const Document = this.models.get(collection);
    return await Document.exists(data);
  };
}

export const mongoDB = new MongoDB();
