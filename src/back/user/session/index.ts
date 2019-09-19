import {
  Redis,
  redis,
} from '../../databases/';

export class UserSession {
  constructor (private client: Redis) {
  }
}

export const userSession = new UserSession(redis);
