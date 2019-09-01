import { Socket } from 'socket.io';
import redis from './redis';

export const messagesHandler = (socket: Socket): void => {
  const registerMessage = async (props: SocketMessageRequest, socket: Socket): Promise<string> => {
    const str = `I received ${ props.message } from ${ socket.id } to ${ props.to }`;
    return Promise.resolve(str);
  };

  const passMessage = (props: SocketMessageResponse, socket: Socket): void => {
    const to = redis.getFromStore(props.to);
    const from = redis.getFromStore(socket.id);

    if (to) {
      socket.client.server.to(to).emit(SocketMessages.message, {
        from,
        message: props.message,
      });
    } else {
      // TODO inform about error
    }
  };

  socket.on(SocketMessages.message, async (props: SocketMessageRequest, ack: SocketAcknowledgment) => {
    let response: SocketMessages;

    try {
      await registerMessage( props, socket );
      response = SocketMessages.messageSuccess;
    } catch {
      response = SocketMessages.messageFailure;
    } finally {
      ack(response);
      passMessage(props, socket);
    }
  });
};