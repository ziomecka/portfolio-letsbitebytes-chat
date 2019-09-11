import { deliveredAction } from '../actions';

export const listenDelivered = (socket: SocketIOClient.Socket) => (
  async (dispatch: AppThunkDispatch<DeliveredAction>): Promise<void> => {
    socket.on(ClientSocketMessages.delivered,
      (request: ClientDeliveredRequest): DeliveredAction => {
        return dispatch(deliveredAction(request));
      }
    );
  }
);
