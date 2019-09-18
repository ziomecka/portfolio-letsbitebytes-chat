declare const enum CommonActionTypes {
  changeActiveConversation = '@APP/Common/change active conversation',
  changeConnectionState = '@APP/Common/change socket connection',
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

declare interface ChangeConversationAction extends ChangeConversationActionProps, ReduxAction {}
declare interface ChangeSocketConnectionAction extends ChangeSocketConnectionActionProps, ReduxAction {}

declare type CommonActions = |
  ChangeConversationAction |
  ChangeSocketConnectionAction;