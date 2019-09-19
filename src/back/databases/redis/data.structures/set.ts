import { logger } from '../../../logger/';

const log = logger('redis');

export function sadd (key: string, value: string): Promise<boolean> {
  return new Promise((resolve, reject): boolean => (
    // @ts-ignore
    this.sadd(key, value, (err: Error, response: boolean): void => {
      if (err) {
        log.error('Value not added to set: ', key, ' ', err);
        reject(err);
      }
      log.info('Value added to set: ', key);
      resolve(response);
    })
  ));
};

export function smembers (key: string): Promise<unknown> {
  return new Promise((resolve, reject): boolean => (
    // @ts-ignore
    this.smembers(key, (err: Error, response: unknown): void => {
      if (err) {
        log.error('Set not returned: ', key, ' ', err);
        reject(err);
      }
      log.info('Set returned: ', key);
      resolve(response);
    })
  ));
};
