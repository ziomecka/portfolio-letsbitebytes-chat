import { socketInitialState } from './initial-state';

export const socketReducer: ReduxReducer<SocketState, SocketActions> =
  (state = socketInitialState, action) => {
    const { type, ...actionPayload } = action;

    switch (type) {
      case (SocketActionTypes.emit): {
        const { message, to, messageId } = actionPayload as EmitAction;
        return {
          ...state,
          [ to ]: [
            ...(state [ to ] || []),
            [ messageId, message, false ],
          ],
        };
      }

      case (SocketActionTypes.delivered): {
        const { to, messageId } = actionPayload as DeliveredAction;
        const conversation = [...state[ to ]];

        const index = conversation.findIndex(message => message[ 0 ] === messageId);
        conversation.splice(index, 1, [ messageId, conversation[ index ][ 1 ], true ]);

        return {
          ...state,
          [ to ]: conversation,
        };
      }

      case (SocketActionTypes.receive): {
        const { message, from, messageId } = actionPayload as ReceiveAction;

        return {
          ...state,
          [ from ]: [
            ...(state [ from ] || []),
            [ messageId, message ],
          ],
        };
      }

      default: {
        return { ...state };
      };
    }
  };
