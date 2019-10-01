import {
  CONNECTION_TIMEOUT,
  SOCKET_URL,
} from './_constants';
import { changeConnectionState } from '../../../../duck/actions';
import { listenAddContact } from './listen-add-contact';
import { listenDelivered } from './listen-delivered';
import { listenReceive } from './listen-receive';
import { logout } from '../.././../Logout/duck/async';
import { monitorConnection } from './monitor-connection';
import { openDialog } from '../../../';
import texts from './texts';

let socket: SocketIOClient.Socket;
let io: unknown;

export const initiateConnection =
(connectionTimeout = CONNECTION_TIMEOUT): AppThunkAction<InitiateSocketAction, void> => (
  async (
    dispatch: AppThunkDispatch<InitiateSocketAction>,
    getState: GetState,
  ): Promise<void> => {
    io = await import('socket.io-client');

    // @ts-ignore
    socket = io(SOCKET_URL, { query: `login=${ getState().user.login }` });

    monitorConnection(dispatch, getState, connectionTimeout, socket);

    socket.on(ClientSocketMessages.connected, () => {
      dispatch(changeConnectionState(ConnectionState.connected));
      dispatch(listenAddContact(socket));
      dispatch(listenReceive(socket));
      dispatch(listenDelivered(socket));
    });

    socket.on(ClientSocketMessages.disconnected, () => (
      dispatch(changeConnectionState(ConnectionState.disconnected))
    ));

    socket.on(ClientSocketMessages.error, (err: string) => {
      if(err === SocketErrors.notAuthenticated) {
        dispatch(logout());
        dispatch(openDialog({
          title: [[texts.dialogTitle]],
          content: [[texts.dialogContent]],
        }));
      }
    });
  }
);

export const closeConnection = (): void => {
  if (socket && typeof socket.close === 'function') {
    socket.removeAllListeners();
    socket.close();
    socket = null;
    io = null;
  }
};

export { socket };
