declare interface SocketMessageRequest {
  to: string;
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

declare interface MapSocketToProps {
  emitMessage(message: string):  Promise<EmitMessageAction>;
}

declare interface SocketProps extends MapStateToSocket, MapDispatchToSocket{}

declare type Statement = [Date, string, boolean];

declare type Conversation = Statement[];

declare type Conversations = Record<string, Conversation>;