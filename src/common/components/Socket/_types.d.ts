declare interface MapStateToSocket {}

declare interface MapDispatchToSocket {
  initiateConnection(): Promise<void>;
  closeConnection(): void;
}

declare interface MapSocketToProps {
  emitMessage(message: string):  Promise<EmitAction>;
  clearConversations(): Promise<ClearConversationsAction>;
}

declare interface SocketProps extends MapStateToSocket, MapDispatchToSocket{}

declare type Statement = [string, string, boolean?];

declare type Conversation = Statement[];

declare type Conversations = Record<string, Conversation>;
