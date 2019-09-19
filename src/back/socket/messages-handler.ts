import {
  deliveredMapper,
  emitMapper,
} from './mappers';
import { logger } from '../logger';
import { user } from '../user/';

const log = logger('messages');

export const messagesHandler = async (socket: Socket): Promise<void> => {
  const emit = (request: ServerEmitRequest): void => {
    const response = emitMapper(request);
    socket.to(`/${ request.to }`).emit(ServerSocketMessages.receive, response);

    // todo session storage
    user.storeMessage(
      response.from,
      request.to,
      [ response.messageId, response.message ],
    );

    log.info('Message emitted to room:', JSON.stringify(response));
  };

  const delivered = (request: ServerDeliveredRequest): void => {
    const response = deliveredMapper(request);
    socket.to(`/${ request.from }`).emit(ServerSocketMessages.delivered, response);

    // todo session storage
    // todo should I pass message in case not stored in emit step?
    user.updateMessage(
      request.from,
      response.to,
      response.messageId,
    );

    log.info('Message delivery confirmed, message from:', JSON.stringify(response));
  };

  socket.on(ServerSocketMessages.emit, emit);
  socket.on(ServerSocketMessages.delivered, delivered);
};
