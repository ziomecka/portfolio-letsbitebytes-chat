declare interface SocketMessageRequest {
  from: string;
  message: string;
}

declare interface SocketMessageResponse {
  to: string;
  message: string;
}

declare interface MapStateToSocket {
  login: string;
}

declare interface MapDispatchToSocket {
  initiate(): Promise<void>;
}

declare interface SocketDispatch {
  emitMessage(message: string):  Promise<EmitMessageAction>;
}

declare interface SocketProps extends MapStateToSocket, MapDispatchToSocket{}