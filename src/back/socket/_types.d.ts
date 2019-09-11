type Server = import('http').Server;
declare type Socket = import('socket.io').Socket;
declare type GetSocket = (app: Server) => void;
declare type SocketAcknowledgment = (response: string) => void;

declare const enum ServerSocketMessages {
  connected = 'connection',
  disconnected = 'disconnect',
  emit = 'emit',
  receive = 'receive',
  delivered = 'delivered',
}

declare interface ServerEmitRequest {
  from: string;
  to: string;
  messageId: string;
  message: string;
}

declare interface ServerEmitResponse {
  from: string;
  messageId: string;
  message: string;
}

declare interface ServerReceiveResponse {
  from: string;
  messageId: string;
  message: string;
}

declare interface ServerDeliveredRequest {
  from: string;
  to: string;
  messageId: string;
}

declare interface ServerDeliveredResponse {
  to: string;
  messageId: string;
}
