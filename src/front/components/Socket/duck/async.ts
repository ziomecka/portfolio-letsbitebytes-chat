import { emitMessageAction, receiveMessageAction } from './actions';
import { findPartner } from '../../../utils/find-partner';

let socket: SocketIOClient.Socket;
const URL = 'http://localhost:8000';

const receiveMessage = (props: SocketMessageRequest): AppThunkAction<ReceiveMessageAction> => (
  async (dispatch: AppThunkDispatch<ReceiveMessageAction>): Promise<ReceiveMessageAction> => (
    dispatch(receiveMessageAction(props))
  )
);

export const initiateSocket = (): AppThunkAction<InitiateSocketAction, void> => (
  async (dispatch: AppThunkDispatch<InitiateSocketAction>, getState: GetState): Promise<void> => {
    const io = await import('socket.io-client');
    socket = io(URL, { query: `login=${ getState().user.login }` });

    socket.on(SocketMessages.userConnected, () => console.log('connected'));

    socket.on(SocketMessages.message, (props: SocketMessageRequest): Promise<ReceiveMessageAction> => (
      dispatch(receiveMessage(props))
    ));
  }
);

export const emitMessage = (message: string): AppThunkAction<EmitMessageAction> => (
  async (dispatch: AppThunkDispatch<EmitMessageAction>, getState: GetState): Promise<EmitMessageAction> => (
    new Promise((resolve): void => {
      const props = { message, to: findPartner(getState().user.role) };

      socket.emit(SocketMessages.message, props, (response: string): void => {
        resolve(dispatch(emitMessageAction( props )));
      });
    })
  )
);


