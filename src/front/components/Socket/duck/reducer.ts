import { Reducer } from "react";
import { socketInitialState } from './initial-state';

const updateConversation = (message: string, conversationId: string, state: SocketState): SocketState => {
  const date = new Date(Date.now());
  const conversation = state [ conversationId ] || [];

  return {
    ...state,
    [ conversationId ]: [
      ...conversation,
      [ date, message, true ],
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

    }

    default: {
      return { ...state };
    };
  }
};
