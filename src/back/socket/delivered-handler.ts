import { deliveredMapper } from './mappers';
import { logger } from '../logger';
import { usersManager } from '../';

const log = logger('messages');

export const deliveredHandler = (socket: Socket): SocketCallback => (
  (request: ServerDeliveredRequest): void => {
    const response = deliveredMapper(request);
    socket.to(`/${ request.from }`).emit(ServerSocketMessages.delivered, response);

    usersManager.updateMessage(
      request.from,
      response.to,
      response.messageId,
    );

    log.info('Message delivery confirmed, message from:', JSON.stringify(response));
  }
);

