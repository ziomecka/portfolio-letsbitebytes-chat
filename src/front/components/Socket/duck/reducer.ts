import { Reducer } from "react";
import { socketInitialState } from './initial-state';

const updateConversation = (
  message: string,
  conversationId: string,
  state: SocketState,
  isUserMessage = true
): SocketState => {
  const date = new Date(Date.now());
  const conversation = state [ conversationId ] || [];

  return {
    ...state,
    [ conversationId ]: [
      ...conversation,
      [ date, message, isUserMessage ],
    ]
  };
};

export const socketReducer: Reducer<SocketState, SocketActions> = (state = socketInitialState, action) => {
  const { type, ...actionPayload } = action;

  switch (type) {
    case (SocketActionTypes.emitMessage): {
      const { message, to } = actionPayload as EmitMessageAction;
      return updateConversation(message, to, state);
    }

    case (SocketActionTypes.receiveMessage): {
      const { message, from } = actionPayload as ReceiveMessageAction;
      return updateConversation(message, from, state, false);
    }

    default: {
      return { ...state };
    };
  }
};
