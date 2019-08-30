import { Socket } from 'socket.io';
import { disconnectHandler } from './disconnect-handler';

export const connectionHandler = (socket: Socket): void => {
  const { login } = socket.handshake.query;

  socket.emit(SocketMessages.userConnected, { login }); // TODO

  socket.on(SocketMessages.disconnect, () => disconnectHandler(socket.client, socket.id));
}