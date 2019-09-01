import { Client } from 'socket.io';
import redis from './redis';

export const disconnectHandler = (io: Client, socketId: string): void => {
  io.server.emit(SocketMessages.disconnect, socketId);
  redis.unstore(socketId);
};

