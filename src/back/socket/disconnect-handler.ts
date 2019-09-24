import { logger } from '../logger/';

const log = logger('socket');

export const disconnectHandler = (socket: Socket): SocketCallback => (
  (): void => {
    const {
      handshake: { query: { login = '' } = { } },
      id,
    } = socket;

    log.info('Socket disconnected:', login, id);

    socket.leave(`/${ login }`);
    log.info('Socket left room after disconnection:', login, id);

    socket.removeAllListeners();
    log.info('All socket listeners removed after disconnection:', login, id);
  }
);

