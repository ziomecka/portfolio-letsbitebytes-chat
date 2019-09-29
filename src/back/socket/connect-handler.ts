import { logger } from '../logger/';

const log = logger('socket');

export const connectHandler = async (socket: Socket): Promise<void> => {
  const {
    handshake: { query: { login = '' } = { } },
    id,
  } = socket;

  log.info('Socket connected:', login, id);

  if (login) {
    socket.join(`/${ login }`);
    log.info('Socket joined room:', login);
    socket.broadcast.emit(ServerSocketMessages.addUser, { login });
  }

  socket.emit(ServerSocketMessages.connected, { login }); // TODO
  log.info('Socket informed about connection:', login, id);
};
