import {
  Redis,
  createRedis,
  setData,
} from '../../databases/';
import { logger } from '../../logger/';

const log = logger('userCache');

export class UserCache {
  private cacheLogins: string;
  // @ts-ignore
  public sadd(key: string, ...value: string): Promise<boolean>;
  // @ts-ignore
  public smembers(key: string): Promise<string[]>;
  // @ts-ignore
  public sdelete(key: string): Promise<boolean>;
  constructor (public readonly client: Redis) {
    this.init();
  }

  private init ():void {
    this.cacheLogins = UserCaches.logins;
    const { client: { client } } = this;

    Object.assign(Object.getPrototypeOf(this), {
      sadd: setData.sadd.bind(client),
      smembers: setData.smembers.bind(client),
      sdelete: setData.delKey.bind(client),
    });
  }

  public disconnect = async (): Promise<boolean> => (
    await this.client.disconnect()
  )

  public cacheUser = async (login: string | string[]): Promise<boolean> => {
    try {
      // @ts-ignore
      return await this.sadd(this.cacheLogins, login);
    } catch (err) {
      log.error('Login not added to cache:', login, err);
    }
  }

  public deleteUsers = async (): Promise<boolean> => {
    try {
      return await this.sdelete(this.cacheLogins);
    } catch (err) {
      log.error('Logins not deleted from cache:', err);
    }
  }

  public getUsers = async (): Promise<string[]> => {
    try {
      return await this.smembers(this.cacheLogins) as string[];
    } catch (err) {
      log.error('Logins not returned from cache:', this.cacheLogins);
    }
  }
}

export const createUserCache = (uri: string): UserCache => new UserCache(createRedis(uri));
