import { Socket } from 'socket.io';

export const messagesHandler = (socket: Socket): void => {
  const registerMessage = async (props: SocketMessageRequest, socket: Socket): Promise<string> => {
    const str = `I received ${ props.message } from ${ socket.id } to ${ props.to }`;
    return Promise.resolve(str);
  };

  const passMessage = (props: SocketMessageResponse, socket: Socket): void => {
    socket.client.server.to(props.to).emit(SocketMessages.message, {
      from: socket.id,
      message: props.message,
    });
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