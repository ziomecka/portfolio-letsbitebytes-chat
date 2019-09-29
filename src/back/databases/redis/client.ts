import * as RedisLib from 'redis';
import { logger } from '../../logger/';

const log = logger();

export class Redis extends RedisLib.RedisClient {
  constructor (redisUrl: string) {
    super({ url: redisUrl });
    this.init();
  }

  public disconnect = async (): Promise<boolean> => {
    return new Promise((resolve): boolean => (
      this.quit(() => resolve(true))
    ));
  }

  private init = (): void => {
    this.on('connect', () => {
      log.info('Redis connected');
    });

    this.on('error', (err) => {
      log.error('Redis connection failed: ', err);
    });

    this.on('end', () => {
      log.info('Redis connection ended');
    });
  };
}

export const createRedis = (url: string): Redis => new Redis(url);
