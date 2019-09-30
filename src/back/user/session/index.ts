import {
  SESSION_STORAGE_AGE,
  SESSION_STORAGE_PREFIX,
} from '../../constants';
import { Redis } from '../../databases/';
import { logger } from '../../logger/';

const log = logger('usersSessions');

export class UsersSessions {
  private storagePrefix: string;
  private storageAge: number;
  private prefixRegExp: RegExp;
  public readonly client: Redis;
  constructor (...args: CacheProps) {
    const [ client, url ] = args;
    this.client = client || new Redis(url);
    this.init();
  }

  private init (): void {
    this.storagePrefix = `${ SESSION_STORAGE_PREFIX }_`;
    this.storageAge = SESSION_STORAGE_AGE;
    this.prefixRegExp = new RegExp(`^${ SESSION_STORAGE_PREFIX }`, 'gi');
  }

  public disconnect = async (): Promise<boolean> => (
    await this.client.disconnect()
  )

  public async storeSession (key: string, value: string): Promise<boolean[]> {
    const sessionKey = this.storagePrefix + key;
    const sessionValue = this.storagePrefix + value;

    return new Promise((resolve, reject): void => {
      const multi = this.client.multi();
      multi.setex(sessionKey, this.storageAge, sessionValue);
      multi.setex(sessionValue, this.storageAge, sessionKey);
      multi.exec((err: Error, result: boolean[]): void => {
        if (err) {
          log.error('Session not stored in cache', key, value);
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  private addPrefix (str: string): string {
    return this.prefixRegExp.test(str)
      ? str
      : this.storagePrefix + str;
  }

  public async deleteSession (key: string, value?: string): Promise<boolean[]> {
    const prefixedValue = this.addPrefix(value);
    const prefixedKey = this.addPrefix(key);
    const storedValue = prefixedValue || await this.client.get(prefixedKey);

    return new Promise((resolve, reject): void => {
      const multi = this.client.multi();
      multi.del(prefixedKey);
      typeof storedValue === 'string' && multi.del(storedValue);
      multi.exec((err: Error, result: boolean[]): void => {
        if (err) {
          log.error('Session not deleted from cache', key, value);
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  public async getSession (value: string): Promise<string> {
    return new Promise((resolve, reject): void => {
      this.client.get((this.addPrefix(value)), (err: Error, result: string): void => {
        if (err) {
          log.error('no value founded for', value);
          reject(err);
        } else {
          resolve(result);
        }
      }) ;
    });
  }
}
