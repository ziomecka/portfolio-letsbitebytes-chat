import { emitAction } from '../actions';
import { socket } from './initiate-connection';

const buildId = (): string => Date.now().toString();

export const emitMessage = (message: string, clientSocket = socket): AppThunkAction<EmitAction> => (
  async (
    dispatch: AppThunkDispatch<EmitAction>, getState: GetState
  ): Promise<EmitAction> => {
    const messageDetails = {
      to: getState().activeConversation,
      messageId: buildId(),
      message,
    };

    clientSocket
      .emit(ClientSocketMessages.emit, { ...messageDetails, from: getState().user.login });

    return dispatch(emitAction(messageDetails));
  }
);
