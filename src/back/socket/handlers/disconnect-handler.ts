import { Client } from 'socket.io';

export const disconnectHandler = (io: Client, socketId: string): void => {
  io.server.emit(SocketMessages.disconnect, socketId);
};

