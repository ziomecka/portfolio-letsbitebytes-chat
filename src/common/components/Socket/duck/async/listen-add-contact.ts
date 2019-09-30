import { addContact } from '../../../';

export const listenAddContact = (socket: SocketIOClient.Socket) => (
  async (
    dispatch: ReduxDispatch,
    getState: GetState,
  ): Promise<void> => {
    socket.on(ClientSocketMessages.addContact,
      (request: ClientAddContactRequest): AddContactAction => {
        if (getState().user.login !== request.login) {
          return dispatch(addContact(request));
        }
      }
    );
  }
);
