declare type SocketAcknowledgment = (response: string) => void;

declare interface SocketMessageRequest {
  to: string;
  message: string;
}

declare interface SocketMessageResponse {
  to: string;
  message: string;
}