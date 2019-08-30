declare type Statement = [Date, string, boolean];

declare type Conversation = Statement[];

declare type Conversations = Record<string, Conversation>;


declare interface MapStateToConversations {
  conversations: unknown;
}

declare type ConversationsState = Conversations;

declare interface ConversationsProps extends MapStateToConversations {}