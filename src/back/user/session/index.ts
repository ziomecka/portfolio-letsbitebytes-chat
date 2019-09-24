import {
  Redis,
  createRedis,
  stringData,
} from '../../databases/';
import {
  SESSION_STORAGE_AGE,
  SESSION_STORAGE_PREFIX,
} from '../../constants';
import { logger } from '../../logger/';

const log = logger('userSession');

export class UserSession {
  // @ts-ignore
  public setString(key: string, value: string, exp?: number): Promise<boolean>;
  // @ts-ignore
  public getString(key: string): Promise<string>;
  // @ts-ignore
  public delString(key: string): Promise<boolean>;
  private storagePrefix: string;
  private storageAge: number;
  private prefixRegExp: RegExp;
  constructor (private client: Redis) {
    this.init();
  }

  private init (): void {
    this.storagePrefix = `${ SESSION_STORAGE_PREFIX }_`;
    this.storageAge = SESSION_STORAGE_AGE;
    this.prefixRegExp = new RegExp(`^${ SESSION_STORAGE_PREFIX }`, 'gi');

    const { client: { client } } = this;
    Object.assign(Object.getPrototypeOf(this), {
      setString: stringData.setString.bind(client),
      getString: stringData.getString.bind(client),
      delString: stringData.delKey.bind(client),
    });
  }

  public disconnect = async (): Promise<boolean> => (
    await this.client.disconnect()
  )

  public async storeSession (key: string, value: string): Promise<boolean> {
    const {
      storageAge,
      storagePrefix,
    } = this;

    const sessionKey = storagePrefix + key;
    const sessionValue = storagePrefix + value;

    try {
      // todo multi, batch transaction
      await this.setString(sessionKey, sessionValue, storageAge);
      await this.setString(sessionValue, sessionKey, storageAge);

      return true;
    } catch (err) {
      log.error('Session not stored in cache', key, value);
      // implement retry strategy and reject the promise
      return false;
    }
  }

  private addPrefix (str: string): string {
    return this.prefixRegExp.test(str)
      ? str
      : this.storagePrefix + str;
  }

  public async deleteSession (key: string, value?: string): Promise<boolean> {
    try {
      // todo multi, batch transaction
      const prefixedValue = this.addPrefix(value);
      const prefixedKey = this.addPrefix(key);
      const storedValue = prefixedValue || await this.getString(prefixedKey);

      await this.delString(prefixedKey);
      await this.delString(storedValue);

      return true;
    } catch (err) {
      log.error('Session not stored in cache', key, value);
      // implement retry strategy and reject the promise
      return false;
    }
  }

  public async getSession (value: string): Promise<string> {
    try {
      // todo multi, batch transaction
      return await this.getString(this.addPrefix(value));
    } catch (err) {
      log.error('no value founded for', value);
      // implement retry strategy and reject the promise
      return '';
    }
  }
}

export const createUserSession = (uri: string): UserSession => new UserSession(createRedis(uri));
