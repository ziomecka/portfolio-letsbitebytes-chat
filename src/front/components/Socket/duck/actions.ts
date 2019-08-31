import { ActionCreator } from "redux";

export const emitMessageAction: ActionCreator<EmitMessageAction> = ({ message }: EmitMessageActionProps) => ({
  type: SocketActionTypes.emitMessage,
  message,
});

export const receiveMessageAction: ActionCreator<ReceiveMessageAction> = ({ message, from }: ReceiveMessageProps) => ({
  type: SocketActionTypes.receiveMessage,
  from,
  message,
});