import { logger } from '../../logger/';
const log = logger('redis');

export function setString (key: string, value: string, exp?: number): Promise<boolean> {
  return new Promise((resolve, reject): boolean => (
    // @ts-ignore
    this.set(key, value, (err: Error, response: boolean): void => {
      if (err) {
        log.error('String not set: ', key, ' ', err);
        reject(err);
      }
      if (exp) this.expire(key, exp);
      log.info('String set: ', key, 'with expire: ', exp);
      resolve(response);
    })
  ));
};

export function getString (key: string, exp?: number): Promise<string> {
  return new Promise((resolve, reject): boolean => (
    this.get(key, (err: Error, response: string): void => {
      if (err) {
        log.error(err);
        log.error('String not returned ', key, ' ', err);
        reject(err);
      }
      if(exp) this.expire(key, exp);
      log.info('String returned: ', key, 'with expire: ', exp);
      resolve(response);
    })
  ));
};