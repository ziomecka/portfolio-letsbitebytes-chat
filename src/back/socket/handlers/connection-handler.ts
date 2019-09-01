import { Socket } from 'socket.io';
import { disconnectHandler } from './disconnect-handler';
import redis from './redis';

export const connectionHandler = (socket: Socket): void => {
  const { login } = socket.handshake.query;

  if (login) {
    redis.store(login, socket.id);
  }

  socket.emit(SocketMessages.userConnected, { login }); // TODO

  socket.on(SocketMessages.disconnect, () => disconnectHandler(socket.client, socket.id));
};
