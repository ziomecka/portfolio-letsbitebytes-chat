import * as RedisLib from 'redis';
import { logger } from '../../logger/';

const log = logger();

export class Redis {
  public client?: RedisLib.RedisClient;
  constructor (redisUrl: string) {
    this.client = undefined;
    this.connect(redisUrl);
  }

  private connect = async (redisUrl: string): Promise<boolean> => (
    new Promise((resolve, reject): void => {
      this.client = RedisLib.createClient(redisUrl);

      this.client.on('connect', () => {
        log.info('Redis connected');
        resolve(true);
      });

      this.client.on ('error', (err) => {
        log.error('Redis connection failed: ', err);
        reject(err);
      });
    })
  );
}

export const createClient = (url: string): Redis => new Redis(url);
