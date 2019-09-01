declare interface EmitMessageActionProps {
  message: string;
  to: string;
}

declare interface EmitMessageAction extends ReduxAction, EmitMessageActionProps {}

declare interface ReceiveMessageProps {
  message: string;
  from: string;
}

declare interface ReceiveMessageAction extends ReduxAction, ReceiveMessageProps {}

declare type InitiateSocketAction = ReduxAction;


declare type SocketActions =
  EmitMessageAction |
  InitiateSocketAction |
  ReceiveMessageAction;

declare const enum SocketActionTypes {
  emitMessage = '@APP/Socket/emit message',
  receiveMessage = '@APP/Socket/receive message',
}

declare type SocketState = Conversations;