import * as RedisLib from 'redis';
import { logger } from '../../logger/';

const url = require('url');
const log = logger();

export class Redis extends RedisLib.RedisClient {
  constructor (redisUrl: string) {
    super({
      password: url.parse(redisUrl).auth.match(/\w+$/)[ 0 ],
      url: redisUrl,
      port: Number(url.parse(redisUrl).port),
      host: url.parse(redisUrl).hostname,
    });

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
