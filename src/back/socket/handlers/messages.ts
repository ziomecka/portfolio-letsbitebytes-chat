import { Messages } from './messages-methods';
import { logger } from '../../logger';

const log = logger('messages');

export const messagesHandler = async (socket: Socket): Promise<void> => {
  let strMessageDetails: string;

  socket.on(SocketMessages.message, async (props: SocketMessageRequest, ack: SocketAcknowledgment) => {
    // let response: SocketMessages;

    const details = await Messages.mapMessage(props, socket);
    strMessageDetails = JSON.stringify(details);

    log.info('Message received: ', strMessageDetails);

    try {
      ack('Message received');
      await Messages.passMessage(details, socket);
      log.info('Message passed: ', strMessageDetails);
    } catch {
      // TODO, is needed?
    } finally {
      try {
        await Messages.registerMessage(details);
        // TODO
        // response = SocketMessages.messageSuccess;
        log.info('Message registered: ', strMessageDetails);
      } catch {
        // TODO
        // response = SocketMessages.messageFailure;
        log.info('Message not registered: ', strMessageDetails);
      }
    }
  });
};