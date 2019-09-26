declare interface MapStateToConversation {
  conversations: Conversations,
  activeConversation: string;
  connectionState: ConnectionState;
}

declare interface MapDispatchToConversation extends MapSocketToProps {}

declare interface ConversationProps extends MapStateToConversation,
  MapDispatchToConversation {}

declare interface ConversationState {
  conversation: Statement[]
  message: string;
  error: boolean;
}
