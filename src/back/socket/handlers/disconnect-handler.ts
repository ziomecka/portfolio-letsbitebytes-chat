import { User } from '../../user/';
import { logger } from '../../logger/';

const log = logger('socket');

export const disconnectHandler = async (socket: Socket): Promise<void> => {
  const { client, id } = socket;

  client.server.emit(SocketMessages.disconnect, id);

  log.info('User disconnected: ', id);

  try {
    const login = await User.getUser(id);
    await User.delUser(id, login);

    log.info('User deleted after disconnection:', id);
    // TODO catch?
  } finally {
    socket.removeAllListeners();

    log.info('All listeners removed after disconnection: ', id);
  }
};
