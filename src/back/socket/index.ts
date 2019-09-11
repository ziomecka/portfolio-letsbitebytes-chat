import * as ioSocket from 'socket.io';
import { connectHandler } from './connect-handler';
import { logger } from '../logger/';
import { messagesHandler } from './messages-handler';

const log = logger('socket');

export let io: ioSocket.Server;

export const socket: GetSocket = (app) => {
  io = ioSocket(app);
  log.info('Socket.io started up:', app.address());

  io.on(ServerSocketMessages.connected, (socket: Socket) => {
    connectHandler(socket);
    messagesHandler(socket);
  });
};
