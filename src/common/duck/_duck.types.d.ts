declare const enum CommonActionTypes {
  changeActiveConversation = '@APP/Common/change active conversation',
  changeConnectionState = '@APP/Common/change socket connection',
  setNotifications = '@APP/Common/set notifications',
  addNotification = '@APP/Common/add notification',
  activateWaitForServer = '@APP/Common/activate waiting for server',
  deactivateWaitForServer = '@APP/Common/deactivate waiting for server',
}

declare const enum ConnectionState {
  connected = 'connected',
  disconnected = 'disconnected',
  unknown = 'unknown',
}

declare interface NotificationsState {
  history: NotificationsList;
  actual: NotificationsList;
}

declare type NotificationsList = OpenDialogProps[];

declare interface CommonState {
  activeConversation: string;
  connectionState: ConnectionState;
  notifications: NotificationsState;
  waitForServer: boolean;
}

declare interface ChangeConversationActionProps {
  activeConversation: string;
}

declare interface ChangeSocketConnectionActionProps {
  connectionState: ConnectionState;
}

declare interface SetNotificationsProps {
  notifications: NotificationsState;
}

declare interface AddNotificationProps extends OpenDialogProps {}

declare interface ChangeConversationAction extends ChangeConversationActionProps, ReduxAction {}
declare interface ChangeSocketConnectionAction extends ChangeSocketConnectionActionProps, ReduxAction {}
declare interface SetNotificationsAction extends ReduxAction, SetNotificationsProps {}
declare interface AddNotificationAction extends ReduxAction, AddNotificationProps {}
declare interface ActivateWaitForServerAction extends ReduxAction {}
declare interface DeactivateWaitForServerAction extends ReduxAction {}

declare type CommonActions = |
  ChangeConversationAction |
  ChangeSocketConnectionAction |
  SetNotificationsAction |
  AddNotificationAction |
  ActivateWaitForServerAction |
  DeactivateWaitForServerAction;
