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

declare interface DeliveredProps extends DeliveredRequest {}
declare interface ReceiveProps extends ReceiveRequest {}

declare const enum ClientSocketMessages {
  connected = 'connect',
  disconnected = 'disconnect',
  emit = 'emit',
  receive = 'receive',
  delivered = 'delivered',
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

declare type SocketActions =
  InitiateSocketAction |
  EmitAction |
  DeliveredAction |
  ReceiveAction |
  ClearConversationsAction;

declare const enum SocketActionTypes {
  receive = '@APP/Socket/receive message',
  delivered = '@APP/Socket/message delivered',
  emit = '@APP/Socket/emit message',
  clearConversations = '@APP/Socket/clearConversations',
}

declare type SocketState = Conversations;