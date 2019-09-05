import { User } from '../../user/';
import { disconnectHandler } from './disconnect-handler';
import { logger } from '../../logger/';

const log = logger('socket');

export const connectionHandler = async (socket: Socket): Promise<void> => {
  const { handshake: { query: { login = '' } = { } }, id } = socket;

  log.info('User connected: ', login, ', ', id);

  try {
    if (login) {
      await User.storeUser(login, id);
      log.info('User stored: ', login, ', ', id);
    }
  } catch {
    log.warn('User not stored: ', id);
    // TODO
  } finally {
    socket.emit(SocketMessages.userConnected, { login }); // TODO

    log.info('User informed about connection: ', login, ', ', id);

    socket.on(SocketMessages.disconnect, () => disconnectHandler(socket));

    log.info('Disconnet listener registered for: ', socket.id, login);
  }
};
