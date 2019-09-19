declare interface MapStateToConversation {
  conversations: Conversations,
  activeConversation: string;
  connectionState: ConnectionState;
}

declare interface MapDispatchToConversation extends MapSocketToProps {}

declare interface ConversationProps extends MapStateToConversation,
  MapDispatchToConversation,
  WithStyles,
  WithPublisherProps {
  subscribe?: (e: string, eventCallback: EventCallback<React.KeyboardEvent<HTMLFormElement>>) => () => void
}

declare interface ConversationState {
  conversation: Statement[]
  message: string;
  error: boolean;
}
