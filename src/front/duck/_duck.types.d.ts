declare const enum CommonActionTypes {
  changeActiveConversation = '@APP/Common/change active conversation',
  changeConnectionState = '@APP/Common/change socket connection',
  setUsers = '@APP/Common/set users',
}

declare const enum ConnectionState {
  connected = 'connected',
  disconnected = 'disconnected',
  unknown = 'unknown',
}

declare interface CommonState {
  activeConversation: string;
  connectionState: ConnectionState;
  users: string[];
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

declare interface SetUsersAction extends ReduxAction, SetUsersActionProps {}
declare interface ChangeConversationAction extends ChangeConversationActionProps, ReduxAction {}
declare interface ChangeSocketConnectionAction extends ChangeSocketConnectionActionProps, ReduxAction {}

declare type CommonActions = |
  ChangeConversationAction |
  ChangeSocketConnectionAction |
  SetUsersAction;