import {
  CONNECTION_TIMEOUT,
  SOCKET_URL,
} from './_constants';
import { changeConnectionState } from '../../../../duck/actions';
import { listenDelivered } from './listen-delivered';
import { listenReceive } from './listen-receive';
import { monitorConnection } from './monitor-connection';

let socket: SocketIOClient.Socket;

export const initiateConnection =
(connectionTimeout = CONNECTION_TIMEOUT): AppThunkAction<InitiateSocketAction, void> => (
  async (
    dispatch: AppThunkDispatch<InitiateSocketAction>,
    getState: GetState,
  ): Promise<void> => {
    const io = await import('socket.io-client');

    // @ts-ignore
    socket = io(SOCKET_URL, { query: `login=${ getState().user.login }` });

    monitorConnection(dispatch, getState, connectionTimeout, socket);

    socket.on(ClientSocketMessages.connected, () => {
      dispatch(changeConnectionState(ConnectionState.connected));
      dispatch(listenReceive(socket));
      dispatch(listenDelivered(socket));
    });

    socket.on(ClientSocketMessages.disconnected, () => (
      dispatch(changeConnectionState(ConnectionState.disconnected))
    ));
  }
);

export { socket };
