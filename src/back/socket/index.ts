import * as ioSocket from 'socket.io';
import { connectionHandler } from './handlers/connection-handler';
import { logger } from '../logger/';
import { messagesHandler } from './handlers/messages-handler';

const log = logger('socket');

export let io: ioSocket.Server;

export const socket: GetSocket = (app) => {
  io = ioSocket(app);
  log.info('Socket.io started up:', app.address());

  io.on(SocketMessages.connection, (socket: ioSocket.Socket) => {
    connectionHandler(socket);
    messagesHandler(socket);
  });
};