import { User } from '../../user/';


export const disconnectHandler = async (socket: Socket): Promise<void> => {
  const { client, id } = socket;

  client.server.emit(SocketMessages.disconnect, id);


  try {
    const login = await User.getUser(id);
    await User.delUser(id, login);

  } finally {
    socket.removeAllListeners();

  }
};
