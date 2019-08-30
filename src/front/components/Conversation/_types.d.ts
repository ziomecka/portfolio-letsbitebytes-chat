declare interface ConversationProps extends MapStateToConversation {
}

declare interface MapStateToConversation {
  conversations: Conversations,
  activeConversation: string;
}