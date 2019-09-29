import { addUser } from '../../../';

export const listenAddUser = (socket: SocketIOClient.Socket) => (
  async (dispatch: ReduxDispatch): Promise<void> => {
    socket.on(ClientSocketMessages.addUser,
      (request: ClientAddUserRequest): AddUserAction => {
        return dispatch(addUser(request));
      }
    );
  }
);
