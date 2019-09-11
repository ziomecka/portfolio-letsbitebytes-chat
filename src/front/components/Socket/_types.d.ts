declare interface MapStateToSocket {}

declare interface MapDispatchToSocket {
  initiateConnection(): Promise<void>;
}

declare interface MapSocketToProps {
  emitMessage(message: string):  Promise<EmitAction>;
}

declare interface SocketProps extends MapStateToSocket, MapDispatchToSocket{}

declare type Statement = [string, string, boolean?];

declare type Conversation = Statement[];

declare type Conversations = Record<string, Conversation>;
