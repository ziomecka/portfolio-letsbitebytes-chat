import * as RedisLib from 'redis';
import { logger } from '../../logger/';
import { promisify } from '../../utils/promisify';

const url = require('url');
const log = logger();
const redisLogger = logger('redis');

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

  private promisifyMethods (): void {
    const not = ['multi'];

    Object.keys(this).forEach(key => {
      if (
        Object.hasOwnProperty.call(this.client, key) &&
        // @ts-ignore
        typeof this.client[ key ] === 'function' &&
        // @ts-ignore
        !not.includes(this.client[ key ].name)
      ) {
        // @ts-ignore
        this[ key ] = promisify(this.client[ key ], redisLogger);
      }
    });
  }

  private init = (): void => {
    this.promisifyMethods();

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
