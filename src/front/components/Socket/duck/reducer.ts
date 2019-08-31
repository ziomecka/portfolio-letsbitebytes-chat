import { Reducer } from "react";
import { socketInitialState } from './initial-state';

export const socketReducer: Reducer<SocketState, SocketActions> = (state = socketInitialState, action) => {
  const { type, ...actionPayload } = action;

  switch (type) {
    case (SocketActionTypes.emitMessage): {
      const { message, to } = actionPayload as EmitMessageAction;
      const date = new Date(Date.now());
      const conversation = state [ to ] || [];

      return {
        ...state,
        [ to ]: [
          ...conversation,
          [ date, message, true ],
        ]
      };
    }

    default: {
      return { ...state };
    };
  }
};

