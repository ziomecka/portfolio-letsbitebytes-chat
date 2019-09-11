import { changeConnectionState } from '../../../../duck/actions';

export const monitorConnection = (
  dispatch: AppThunkDispatch<ChangeSocketConnectionAction>,
  getState: GetState,
  connectionTimeout: number,
  socket: SocketIOClient.Socket,
): number => {

  // to do clear timeout?
  return setTimeout(() => {
    if(!socket.connected && getState().connectionState === ConnectionState.unknown) {
      dispatch(changeConnectionState(ConnectionState.disconnected));
    }
  }, connectionTimeout) as unknown as number;
};
