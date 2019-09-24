import { emitMapper } from './mappers';
import { logger } from '../logger';
import { usersManager } from '../';

const log = logger('messages');

export const emitHandler = (socket: Socket): SocketCallback => (
  async (request: ServerEmitRequest): Promise<void> => {
    const response = emitMapper(request);

    // todo error handling, retry policy?
    try {
      await usersManager.storeMessage(
        response.from,
        request.to,
        [ response.messageId, response.message ],
      );

      socket.to(`/${ request.to }`).emit(ServerSocketMessages.receive, response);
      log.info('Message emitted to room:', JSON.stringify(response));
    } catch {
      // todo reject
    }
  }
);
