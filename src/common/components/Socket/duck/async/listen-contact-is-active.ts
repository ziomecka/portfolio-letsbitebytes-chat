import { changeContactIsActive } from '../../../';

export const listenContactIsActive = (socket: SocketIOClient.Socket) => (
  async (
    dispatch: ReduxDispatch,
    getState: GetState,
  ): Promise<void> => {
    socket.on(ClientSocketMessages.activateContact,
      ({ login }: ClientChangeIsActiveContactRequest): AddContactAction => {
        if (getState().user.login !== login) {
          return dispatch(changeContactIsActive({ login, isActive: true }));
        }
      }
    );

    socket.on(ClientSocketMessages.deactivateContact,
      ({ login }: ClientChangeIsActiveContactRequest): AddContactAction => {
        if (getState().user.login !== login) {
          return dispatch(changeContactIsActive({ login, isActive: false }));
        }
      }
    );
  }
);
