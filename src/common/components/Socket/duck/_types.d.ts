declare type InitiateSocketAction = ReduxAction;

declare interface EmitActionProps {
  to: string;
  messageId: string
  message: string;
}

declare interface ReceiveRequest {
  from: string;
  messageId: string;
  message: string;
}

declare interface DeliveredRequest {
  to: string;
  messageId: string;
}

declare interface EmitAction extends ReduxAction, EmitActionProps {}
declare interface ReceiveAction extends ReduxAction, ReceiveProps {}
declare interface DeliveredAction extends ReduxAction, DeliveredProps {}
declare interface ClearConversationsAction extends ReduxAction {}
declare interface SetConversationsAction extends ReduxAction, SetConversationsProps {}

declare interface DeliveredProps extends DeliveredRequest {}
declare interface ReceiveProps extends ReceiveRequest {}
declare interface SetConversationsProps {
  conversations: Conversations;
}

declare const enum ClientSocketMessages {
  connected = 'connect',
  disconnected = 'disconnect',
  addContact = 'addContact',
  delivered = 'delivered',
  emit = 'emit',
  error = 'error',
  receive = 'receive',
}

declare const enum SocketErrors {
  notAuthenticated = 'Not authenticated',
}

declare type ClientDeliveredRequest = {
  to: string;
  messageId: string;
};

declare type ClientReceiveRequest = {
  from: string;
  messageId: string;
  message: string;
};

declare type ClientAddContactRequest = {
  login: string;
};

declare type SocketActions =
  InitiateSocketAction |
  EmitAction |
  DeliveredAction |
  ReceiveAction |
  ClearConversationsAction |
  SetConversationsAction;

declare const enum SocketActionTypes {
  receive = '@APP/Socket/receive message',
  delivered = '@APP/Socket/message delivered',
  emit = '@APP/Socket/emit message',
  clearConversations = '@APP/Socket/clear conversations',
  setConversations = '@APP/Socket/set conversations',
}

declare type SocketState = Conversations;