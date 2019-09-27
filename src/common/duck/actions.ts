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

export const setNotifications: ReduxActionCreator<SetNotificationsAction> =
({ notifications }: SetNotificationsProps) => ({
  type: CommonActionTypes.setNotifications,
  notifications,
});

export const addNotification: ReduxActionCreator<AddNotificationAction> =
(props: AddNotificationProps) => ({
  type: CommonActionTypes.addNotification,
  ...props,
});

export const activateWaitForServer: ReduxActionCreator<ReduxAction> =
() => ({
  type: CommonActionTypes.activateWaitForServer,
});

export const deactivateWaitForServer: ReduxActionCreator<ReduxAction> =
() => ({
  type: CommonActionTypes.deactivateWaitForServer,
});