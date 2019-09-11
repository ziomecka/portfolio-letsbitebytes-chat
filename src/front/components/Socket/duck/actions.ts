export const emitAction: ReduxActionCreator<EmitAction> =
({ message, to, messageId }: EmitActionProps) => ({
  type: SocketActionTypes.emit,
  to,
  messageId,
  message,
});

export const receiveAction: ReduxActionCreator<ReceiveAction> =
({ message, from, messageId }: ReceiveProps) => ({
  type: SocketActionTypes.receive,
  from,
  messageId,
  message,
});

export const deliveredAction: ReduxActionCreator<DeliveredAction> =
({ to, messageId }: DeliveredProps) => ({
  type: SocketActionTypes.delivered,
  to,
  messageId,
});
