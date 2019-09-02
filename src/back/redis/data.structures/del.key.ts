import { logger } from '../../logger/';
const log = logger('redis');

export function delKey (key: string): Promise<number> {
  return new Promise((resolve, reject): boolean => (
    this.del(key, (err: Error, response: number): void => {
      if (err) {
        log.error('Key not deleted: ', err);
        reject(err);
      };
      log.info('Key deleted: ', key);

      resolve(response);
    })
  ));
};