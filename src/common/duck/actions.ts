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

export const activateWaitForServer: ReduxActionCreator<ActivateWaitForServerAction> =
() => ({
  type: CommonActionTypes.activateWaitForServer,
});

export const deactivateWaitForServer: ReduxActionCreator<DeactivateWaitForServerAction> =
() => ({
  type: CommonActionTypes.deactivateWaitForServer,
});

export const addHelper: ReduxActionCreator<AddHelperAction> =
({ helperText, helperType }: AddHelperProps) => ({
  type: CommonActionTypes.addHelper,
  helperText,
  helperType,
});

export const removeHelper: ReduxActionCreator<RemoveHelperAction> =
() => ({
  type: CommonActionTypes.removeHelper,
});
