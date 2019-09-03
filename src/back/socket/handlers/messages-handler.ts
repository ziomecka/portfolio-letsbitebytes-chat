import { Socket } from 'socket.io';
import { User } from '../../user';
import { logger } from '../../logger';

const log = logger('socket');

export const messagesHandler = (socket: Socket): void => {
  const buildMessageDetails = (props: SocketMessageRequest | SocketMessageResponse, socket: Socket, from?: string): unknown => (
    Object.assign( props, { from: `${ from }, ${ socket.id }` })
  );

  const registerMessage = async (props: SocketMessageRequest, socket: Socket): Promise<string> => {
    // TODO MongoDB?
    const str = `I received ${ props.message } from ${ socket.id } to ${ props.to }`;
    return Promise.resolve(str);
  };

  const passMessage = async (props: SocketMessageResponse, socket: Socket): Promise<void> => {
    try {
      const to = await User.getUser(props.to);
      const from = await User.getUser(socket.id);

      socket.client.server.to(to).emit(SocketMessages.message, {
        from,
        message: props.message,
      });

      log.info('Message passed: ', buildMessageDetails(props, socket, from));
    } catch (err) {
      log.error('Message not passed: ', buildMessageDetails(props, socket), ' ', err);
    }
  };


  socket.on(SocketMessages.message, async (props: SocketMessageRequest, ack: SocketAcknowledgment) => {
    let response: SocketMessages;
    log.info('Message received: ', props);

    try {
      await registerMessage( props, socket );
      response = SocketMessages.messageSuccess;
      log.info('Message registered: ', buildMessageDetails(props, socket));
    } catch {
      response = SocketMessages.messageFailure;
      log.info('Message not registered: ', buildMessageDetails(props, socket));
    } finally {
      ack(response);
      passMessage(props, socket);
    }
  });
};