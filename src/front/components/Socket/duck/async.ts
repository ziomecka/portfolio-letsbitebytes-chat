import * as io from 'socket.io-client';
import { emitMessageAction, receiveMessageAction } from './actions';

let socket: SocketIOClient.Socket;
const URL = 'http://localhost:8000';

const receiveMessage = (props: SocketMessageRequest, ack: SocketAcknowledgment): AppThunkAction<ReceiveMessageAction> => (
  async (dispatch: AppThunkDispatch<ReceiveMessageAction>): Promise<ReceiveMessageAction> => {
    ack(''); // TODO

    return dispatch(receiveMessageAction({}));
  }
);

export const initiateSocket = (): AppThunkAction<InitiateSocketAction, void> => (
  async (dispatch: AppThunkDispatch<InitiateSocketAction>, getState: GetState): Promise<void> => {
    socket = io(URL, { query: `login=${ getState().user.login }` });

    socket.on(SocketMessages.userConnected, () => console.log('connected'));

    socket.on(SocketMessages.message, receiveMessage);
  }
);

export const emitMessage = (message: string): AppThunkAction<EmitMessageAction> => (
  async (dispatch: AppThunkDispatch<EmitMessageAction>, getState: GetState): Promise<EmitMessageAction> => (
    new Promise((resolve): void => {
      const to = getState().activeConversation;
      socket.emit(SocketMessages.message, { message, to }, (response: string): void => {
        resolve(dispatch(emitMessageAction({ message, to })));
      });
    })
  )
);


