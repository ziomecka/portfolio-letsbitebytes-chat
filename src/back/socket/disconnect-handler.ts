import { logger } from '../logger/';
import { usersManager } from '../';

const log = logger('socket');

export const disconnectHandler = (socket: Socket): SocketCallback => (
  (): void => {
    const {
      handshake: { query: { login = '' } = { } },
      id,
    } = socket;

    log.info('Socket disconnected:', login, id);

    socket.leave(`/${ login }`);

    socket.broadcast.emit(ServerSocketMessages.deactivateContact, { login });
    usersManager.changeUserIsActive(login, false);

    log.info('Socket left room after disconnection:', login, id);

    socket.removeAllListeners();
    log.info('All socket listeners removed after disconnection:', login, id);
  }
);

