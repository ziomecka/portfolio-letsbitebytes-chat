declare const enum CommonActionTypes {
  changeActiveConversation = '@APP/Common/change active conversation',
  changeConnectionState = '@APP/Common/change socket connection',
  setUsers = '@APP/Common/set users',
  setNotifications = '@APP/Common/set notifications',
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
  users: string[];
  dialog: DialogState;
  notifications: NotificationsState;
}

declare interface ChangeConversationActionProps {
  activeConversation: string;
}

declare interface ChangeSocketConnectionActionProps {
  connectionState: ConnectionState;
}

declare interface SetUsersActionProps {
  users: string[];
}

declare interface SetNotificationsProps {
  notifications: NotificationsState;
}

declare interface SetUsersAction extends ReduxAction, SetUsersActionProps {}
declare interface ChangeConversationAction extends ChangeConversationActionProps, ReduxAction {}
declare interface ChangeSocketConnectionAction extends ChangeSocketConnectionActionProps, ReduxAction {}
declare interface SetNotificationsAction extends ReduxAction, SetNotificationsProps {}

declare type CommonActions = |
  ChangeConversationAction |
  ChangeSocketConnectionAction |
  SetUsersAction |
  DialogActions |
  SetNotificationsAction;