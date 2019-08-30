import * as ioSocket from 'socket.io';
import { connectionHandler } from './handlers/connection-handler';
import { messagesHandler } from './handlers/messages-handler';

require('dotenv').config();

const { SOCKET_PORT } = process.env;

export const socket: GetSocket = (app) => {
  const io = ioSocket.listen(app.listen(SOCKET_PORT));

  io.on(SocketMessages.connection, (socket: ioSocket.Socket) => {
    connectionHandler(socket);
    messagesHandler(socket);
  });
};