import { Redis } from '../../databases/';
import { logger } from '../../logger/';

const log = logger('userCache');

export class UsersCache {
  private allUsersCache: UserCaches;
  private activeUsersCache: UserCaches;
  public readonly client: Redis;
  constructor (...args: CacheProps) {
    const [ client, url ] = args;
    this.client = client || new Redis(url);
    this.init();
  }

  private init ():void {
    this.allUsersCache = UserCaches.allUsers;
    this.activeUsersCache = UserCaches.activeUsers;
  }

  private cache = async (value: string | string[], cache: UserCaches): Promise<boolean> => {
    return await this.client.sadd(cache, value);
  }

  private delete = async (value: string | string[], cache: UserCaches): Promise<boolean> => {
    return await this.client.srem(cache, value);
  }

  public disconnect = async (): Promise<boolean> => {
    return await this.client.disconnect();
  }

  public createUser = async (value: string | string[]): Promise<boolean> => {
    return this.cache(value, this.allUsersCache);
  }

  public loginUser = async (value: string): Promise<boolean> => {
    return this.cache(value, this.activeUsersCache);
  }

  public logoutUser = async (value: string): Promise<boolean> => {
    return this.delete(value, this.activeUsersCache);
  }

  public activateUser = async (value: string): Promise<boolean> => {
    return this.cache(value, this.activeUsersCache);
  }

  public deactivateUser = async (value: string): Promise<boolean> => {
    return this.delete(value, this.activeUsersCache);
  }

  public getUsers (): Promise<GetUsersFromCache> {
    return new Promise((resolve, reject): void => {
      const multi = this.client.multi();

      multi.smembers(this.allUsersCache);
      multi.smembers(this.activeUsersCache);

      multi.exec((err: Error, result: string[][]): void => {
        if (err) {
          log.error('Users not read from caches:', err);
          reject(false);
        } else {
          const [ allUsers, activeUsers ] = result;
          resolve({ allUsers, activeUsers });
        }
      });
    });
  }

  public deleteCaches = async (): Promise<boolean[]> => {
    return new Promise((resolve, reject): void => {
      const multi = this.client.multi();

      multi.del(this.allUsersCache);
      multi.del(this.activeUsersCache);

      multi.exec((err: Error, result: boolean[]): void => {
        if (err) {
          log.error('Users caches not deleted:', err);
          reject([false]);
        } else {
          resolve(result);
        }
      });
    });
  }
}
