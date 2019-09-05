import { User } from '../../user/';
import { disconnectHandler } from './disconnect-handler';

export const connectionHandler = async (socket: Socket): Promise<void> => {
  const { handshake: { query: { login = '' } = { } }, id } = socket;

  try {
    if (login) {
      await User.storeUser(login, id);
    }
  } finally {
    socket.emit(SocketMessages.userConnected, { login }); // TODO

    socket.on(SocketMessages.disconnect, () => disconnectHandler(socket));
  }
};
