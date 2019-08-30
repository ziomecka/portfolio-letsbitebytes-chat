import { ActionCreator } from "redux";

export const emitMessageAction: ActionCreator<EmitMessageAction> = ({ message }: EmitMessageActionProps) => ({
  type: 'SOME ACTION',
  message,
});

export const receiveMessageAction: ActionCreator<ReceiveMessageAction> = ({ message, from }: ReceiveMessageProps) => ({
  from,
  type: 'SOME ACTION',
  message,
});