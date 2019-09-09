import { REDIS_USER_EXP } from '../constants';
import { logger } from '../logger/';
import { redis } from '../redis';

const userExp = Number(REDIS_USER_EXP);
const log = logger('user');

export class User {
  public static storeUser = async (key: string, value: string): Promise<boolean> => {
    try {
      await redis.setString(key, value, userExp);

      const result = redis.setString(value, key, userExp);

      log.info('User stored: ', key);

      return result;
    } catch (err) {
      log.error('User not stored: ', key);

      return Promise.resolve(false);
    }
  };

  public static getUser = async (key: string, userExp?: number): Promise<string> => {
    try {
      const result = await redis.getString(key, userExp);

      log.info('User found: ', key);

      return result;
    } catch (err) {
      log.error('User not found: ', key);

      return; // TODO try to get from mongoDB
    }
  };

  public static delUser = async (key: string, value?: string): Promise<boolean> => {
    let resultKey: boolean;
    let resultValue: boolean;

    try {
      // TODO and corresponding value - do not search twice. Is it needed?
      resultKey = await redis.delKey(key);

      log.info('User deleted: ', key);

      resultValue = value
        ? await redis.delKey(value)
        : true;

      value && log.info('User deleted: ', value);

      return resultKey && resultValue;
    } catch (err) {
      log.error('User not deleted:', key, resultKey, value, resultValue);

      return Promise.resolve(false); // TODO
    }
  };
}
