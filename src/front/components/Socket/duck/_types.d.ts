declare interface EmitMessageActionProps {
  message: string;
  to: string;
}

declare interface EmitMessageAction extends EmitMessageActionProps {
  type: string;
  to: string;
}

declare interface ReceiveMessageProps {
  message: string;
  from: string;
}

declare interface ReceiveMessageAction extends ReceiveMessageProps {
  type: string;
}

declare interface InitiateSocketAction {
  type: string;
}

declare const enum SocketActionTypes {
  emitMessage = '@APP/Socket/emit message',
  receiveMessage = '@APP/Socket/receive message',
}
