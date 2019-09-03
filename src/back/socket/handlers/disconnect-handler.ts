import { Client } from 'socket.io';
import { User } from '../../user/';

export const disconnectHandler = (io: Client, socketId: string): void => {
  io.server.emit(SocketMessages.disconnect, socketId);
  User.delUser(socketId);
};
