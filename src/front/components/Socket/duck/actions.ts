import { ActionCreator } from 'redux';

export const emitMessageAction: ActionCreator<EmitMessageAction> =
  ({ message, to }: EmitMessageActionProps) => ({
    type: SocketActionTypes.emitMessage,
    message,
    to,
  });

export const receiveMessageAction: ActionCreator<ReceiveMessageAction> =
  ({ message, from }: ReceiveMessageProps) => ({
    type: SocketActionTypes.receiveMessage,
    from,
    message,
  });
