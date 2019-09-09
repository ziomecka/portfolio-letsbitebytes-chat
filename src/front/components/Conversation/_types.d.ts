declare interface MapStateToConversation {
  conversations: Conversations,
  activeConversation: string;
}

declare interface MapDispatchToConversation extends MapSocketToProps {}

declare interface ConversationProps extends MapStateToConversation, MapDispatchToConversation, WithPublisherProps {
  subscribe?: (e: string, eventCallback: EventCallback<React.KeyboardEvent<HTMLFormElement>>) => () => void
}