import { logger } from '../logger/';

const log = logger('socket');

const disconnectHandler = async (socket: Socket, login: string): Promise<void> => {
  const { id } = socket;
  log.info('Socket disconnected:', login, id);

  socket.leave(`/${ login }`);
  log.info('Socket left room after disconnection:', login, id);

  socket.removeAllListeners();
  log.info('All socket listeners removed after disconnection:', login, id);
};


export const connectHandler = async (socket: Socket): Promise<void> => {
  const { handshake: { query: { login = '' } = { } }, id } = socket;
  log.info('Socket connected:', login, id);

  if (login) {
    socket.join(`/${ login }`);
    log.info('Socket joined room:', login);
  }

  socket.emit(ServerSocketMessages.connected, { login }); // TODO
  log.info('Socket informed about connection:', login, id);

  socket.on(ServerSocketMessages.disconnected, () => disconnectHandler(socket, login));
  log.info('Disconnet listener registered for socket:', login, id);
};
