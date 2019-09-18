declare interface MapStateToUsers {
  users: string[];
}

declare interface MapDispatchToUsers {
  changeActiveConversation(login: string): ChangeConversationAction;
}

declare interface UsersProps extends MapStateToUsers, MapDispatchToUsers{}
