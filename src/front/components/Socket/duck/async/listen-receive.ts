import { receiveAction } from '../actions';

const confirm = (socket: SocketIOClient.Socket, confirm: unknown) => (
  async (): Promise<void> => {
    socket.emit(ClientSocketMessages.delivered, confirm);
  }
);

export const listenReceive = (socket: SocketIOClient.Socket) => (
  async (dispatch: AppThunkDispatch<ReceiveAction>, getState: GetState): Promise<void> => {
    socket.on(ClientSocketMessages.receive,
      (request: ClientReceiveRequest): ReceiveAction => {
        dispatch(
          confirm(
            socket, { from: request.from, to: getState().user.login, messageId: request.messageId }
          )
        );
        return dispatch(receiveAction(request));
      }
    );
  }
);
