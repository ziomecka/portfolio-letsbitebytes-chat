import { Redis } from '../../databases/';
import { logger } from '../../logger/';

const log = logger('userCache');

export class UserCache {
  private cacheLogins: string;
  public readonly client: Redis;
  constructor (...args: CacheProps) {
    const [ client, url ] = args;
    this.client = client || new Redis(url);
    this.init();
  }

  private init ():void {
    this.cacheLogins = UserCaches.logins;
  }

  public disconnect = async (): Promise<boolean> => (
    await this.client.disconnect()
  )

  public cacheUser = async (login: string | string[]): Promise<boolean> => {
    try {
      // @ts-ignore
      return await this.client.sadd(this.cacheLogins, login);
    } catch (err) {
      log.error('Login not added to cache:', login, err);
    }
  }

  public deleteUsers = async (): Promise<boolean> => {
    try {
      return await this.client.del(this.cacheLogins);
    } catch (err) {
      log.error('Logins not deleted from cache:', err);
    }
  }

  public getUsers = async (): Promise<string[]> => {
    try {
      return await this.client.smembers(this.cacheLogins) as string[];
    } catch (err) {
      log.error('Logins not returned from cache:', this.cacheLogins);
    }
  }
}

export const createUserCache = (uri: string): UserCache => new UserCache(createRedis(uri));
