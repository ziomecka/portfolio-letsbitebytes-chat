import { Socket } from 'socket.io';
import { User } from '../../user';

export const messagesHandler = (socket: Socket): void => {
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

    } catch (err) {
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