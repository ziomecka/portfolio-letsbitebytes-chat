declare interface MapStateToConversation {
  conversations: Conversations,
  activeConversation: string;
}

declare interface MapDispatchToConversation extends MapSocketToProps {}

declare interface ConversationProps extends MapStateToConversation, MapDispatchToConversation {
}