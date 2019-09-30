declare interface MapStateToContacts {
  activeConversation: string;
  contacts: string[];
}

declare interface MapDispatchToContacts {
  changeActiveConversation(login: string): ChangeConversationAction;
}

declare interface ContactsProps extends MapStateToContacts, MapDispatchToContacts, WithStyles, WithAppSize {
}
