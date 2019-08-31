declare interface EmitMessageActionProps {
  message: string;
  to: string;
}

declare interface EmitMessageAction extends Action, EmitMessageActionProps {}

declare interface ReceiveMessageProps {
  message: string;
  from: string;
}

declare interface ReceiveMessageAction extends Action, ReceiveMessageProps {}

declare interface InitiateSocketAction {
  type: string;
}

declare type SocketActions =
  EmitMessageAction |
  InitiateSocketAction |
  ReceiveMessageAction;

declare const enum SocketActionTypes {
  emitMessage = '@APP/Socket/emit message',
  receiveMessage = '@APP/Socket/receive message',
}

declare type SocketState = Conversations;