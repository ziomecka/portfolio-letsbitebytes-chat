import { User } from '../../user';

export class Messages {
  public static registerMessage = async (details: MessageDetails): Promise<string> => {
    // TODO MongoDB?
    const str = `I received ${ details.message } from ${ details.from } to ${ details.to }`;
    return Promise.resolve(str);
  };

  public static passMessage = async (details: MessageDetails, socket: Socket): Promise<boolean> => {
    // TODO what is returned, try, catch
    console.log('details.to.socketId', details.to.socketId);
    return socket.client.server.to(details.to.socketId).emit(SocketMessages.message, {
      from: details.from.login || details.from.socketId, // TODO
      message: details.message,
    });
  };

  public static mapMessage = async (props: SocketMessageRequest | SocketMessageResponse, socket: Socket): Promise<MessageDetails> => {
    let fromLogin: string;
    let toSocketId: string;

    try {
      fromLogin = await User.getUser(socket.id);
      toSocketId = await User.getUser(props.to);
    } catch {
      // TODO
    }

    return {
      from: { login: fromLogin, socketId: socket.id },
      to: { login: props.to, socketId: toSocketId },
      message: props.message
    };
  };
}