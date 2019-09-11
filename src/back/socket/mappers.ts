export const emitMapper = (request: ServerEmitRequest): ServerEmitResponse => ({
  from: request.from,
  messageId: request.messageId,
  message: request.message,
});

export const deliveredMapper = (request: ServerDeliveredRequest): ServerDeliveredResponse => ({
  to: request.to,
  messageId: request.messageId,
});
