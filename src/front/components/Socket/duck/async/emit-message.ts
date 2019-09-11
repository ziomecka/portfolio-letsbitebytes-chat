import { emitAction } from '../actions';
import { findPartner } from '../../../../utils/find-partner';
import { socket } from './initiate-connection';

const buildId = (): string => Date.now().toString();

export const emitMessage = (message: string, clientSocket = socket): AppThunkAction<EmitAction> => (
  async (
    dispatch: AppThunkDispatch<EmitAction>, getState: GetState
  ): Promise<EmitAction> => {
    const messageDetails = {
      to: findPartner(getState().user.role),
      messageId: buildId(),
      message,
    };

    clientSocket
      .emit(ClientSocketMessages.emit, { ...messageDetails, from: getState().user.login });

    return dispatch(emitAction(messageDetails));
  }
);
