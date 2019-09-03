import { Socket } from 'socket.io';
import { User } from '../../user/';
import { disconnectHandler } from './disconnect-handler';

export const connectionHandler = async (socket: Socket): Promise<void> => {
  const { login } = socket.handshake.query;

  try {
    if (login) {
      await User.storeUser(login, socket.id);
    }
  } finally {
    socket.emit(SocketMessages.userConnected, { login }); // TODO

    socket.on(SocketMessages.disconnect, () => disconnectHandler(socket.client, socket.id));
  }
};
