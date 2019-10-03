declare interface MapStateToConversation {
  conversations: Conversations,
  activeConversation: string;
  connectionState: ConnectionState;
  helperText: string;
}

declare interface MapDispatchToConversation extends
MapSocketToProps,
MapHelperToDispatch {}

declare interface ConversationProps extends MapStateToConversation,
  MapDispatchToConversation {}

declare interface ConversationState {
  conversation: Statement[]
  message: string;
}
