import { addContact } from '../../../';

export const listenAddContact = (socket: SocketIOClient.Socket) => (
  async (dispatch: ReduxDispatch): Promise<void> => {
    socket.on(ClientSocketMessages.addContact,
      (request: ClientAddContactRequest): AddContactAction => {
        return dispatch(addContact(request));
      }
    );
  }
);
