import {
  Redis,
  createRedis,
} from '../../databases/';

export class UserSession {
  constructor (private client: Redis) {
  }

  public disconnect = async (): Promise<boolean> => (
    await this.client.disconnect()
  )
}

export const createUserSession = (uri: string): UserSession => new UserSession(createRedis(uri));
