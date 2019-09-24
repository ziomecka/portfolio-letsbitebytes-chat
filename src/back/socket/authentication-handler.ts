import { extractCookie } from '../utils/extract-cookie';
import { logger } from '../logger/';
import { usersManager } from '..';

const log = logger('socket');

export const authenticationHandler = (socket: Socket) => async (
  object: SocketPacket,
  next: SocketNext,
  isAuthenticated: ((login: string, value: string) => Promise<boolean>) =
  usersManager.isAuthenticated
): Promise<void> => {
  const {
    handshake: {
      query: { login = '' } = { },
      headers: { cookie } },
  } = socket;

  try {
    const authenticated = await isAuthenticated(login, extractCookie(cookie));

    if (!authenticated) {
      log.error('User not authenticated:', login, cookie);
      next(new Error(SocketErrors.notAuthenticated));
    } else {
      log.info('User authenticated:', login, cookie);
      next();
    }
  } catch (err) {
    log.error('User not authenticated:', login, cookie, err);
    next(new Error(SocketErrors.notAuthenticated));
  }
};
