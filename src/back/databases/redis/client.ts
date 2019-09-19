import * as RedisLib from 'redis';
import { logger } from '../../logger/';
const url = require('url');

const log = logger();

export class Redis {
  public client?: RedisLib.RedisClient;
  private auth: string;
  constructor (redisUrl: string) {
    this.client = undefined;
    this.auth = url.parse(redisUrl).auth;

    this.connect(redisUrl);
  }

  public disconnect = async (): Promise<boolean> => {
    return new Promise((resolve): boolean => (
      this.client.quit(() => resolve(true))
    ));
  }

  private connect = (redisUrl: string): void => {
    this.client = RedisLib.createClient(redisUrl);

    this.client.on('connect', () => {
      log.info('Redis connected');
    });

    this.client.on ('error', (err) => {
      log.error('Redis connection failed: ', err);
    });

    this.client.on ('end', () => {
      log.info('Redis connection ended');
    });

    this.client.auth(this.auth.split(':')[ 1 ]);
  };
}

export const createRedis = (url: string): Redis => new Redis(url);
