import * as ioSocket from 'socket.io';
import { connectionHandler } from './handlers/connection-handler';
import { logger } from '../logger/';
import { messagesHandler } from './handlers/messages-handler';

require('dotenv').config();
const log = logger('socket');

const port = process.env.NODE_ENV === 'production'
  ? process.env.PORT
  : process.env.SOCKET_PORT;

export const socket: GetSocket = (app) => {
  const io = ioSocket.listen(app.listen(port));
  log.info('Socket.io started up:', app.address());

  io.on(SocketMessages.connection, (socket: ioSocket.Socket) => {
    connectionHandler(socket);
    messagesHandler(socket);
  });
};