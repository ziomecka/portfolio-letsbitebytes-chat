import * as ioSocket from 'socket.io';
import { authenticationHandler } from './authentication-handler';
import { connectHandler } from './connect-handler';
import { deliveredHandler } from './delivered-handler';
import { disconnectHandler } from './disconnect-handler';
import { emitHandler } from './emit-handler';
import { logger } from '../logger/';

const log = logger('socket');

export let io: ioSocket.Server;

export const socket: GetSocket = (app) => {
  io = ioSocket(app);
  log.info('Socket.io started up:', app.address());

  io.on(ServerSocketMessages.connected, (socket: Socket) => {
    connectHandler(socket);

    socket.use(authenticationHandler(socket));
    socket.on(ServerSocketMessages.emit, emitHandler(socket));
    socket.on(ServerSocketMessages.delivered, deliveredHandler(socket));
    socket.on(ServerSocketMessages.disconnected, disconnectHandler(socket));
  });
};
