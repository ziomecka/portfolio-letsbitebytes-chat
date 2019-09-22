export const changeActiveConversation: ReduxActionCreator<ChangeConversationAction> =
  (activeConversation: string) => ({
    type: CommonActionTypes.changeActiveConversation,
    activeConversation,
  });

export const changeConnectionState: ReduxActionCreator<ChangeSocketConnectionAction> =
  (connectionState: ConnectionState) => ({
    type: CommonActionTypes.changeConnectionState,
    connectionState,
  });

export const setUsers: ReduxActionCreator<SetUsersAction> =
  ({ users }: SetUsersActionProps) => ({
    type: CommonActionTypes.setUsers,
    users,
  });
