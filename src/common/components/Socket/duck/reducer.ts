import { socketInitialState } from './initial-state';
import update from 'immutability-helper';

export const socketReducer: ReduxReducer<SocketState, SocketActions> =
  (state = update({} as SocketState, { $set: socketInitialState }), action) => {
    const { type, ...actionPayload } = action;

    switch (type) {
      case (SocketActionTypes.emit): {
        const { message, to, messageId } = actionPayload as EmitAction;
        if (!state[ to ]) state[ to ] = [];

        return {
          ...update({} as SocketState, { $set: state }),
          [ to ]: update(state[ to ], {
            $push: [[ messageId, message, false ]],
          }),
        };
      }

      case (SocketActionTypes.delivered): {
        const { to, messageId } = actionPayload as DeliveredAction;

        const index = (state[ to ] || [])
          .findIndex((message: Statement) => message[ 0 ] === messageId);

        if (index !== -1) {
          return {
            ...update({} as SocketState, { $set: state }),
            [ to ]: update(state[ to ], {
              $splice: [[ index, 1, [ messageId, state[ to ][ index ][ 1 ], true ] ]],
            }),
          };
        }

        return update({} as SocketState, { $set: state });
      }

      case (SocketActionTypes.receive): {
        const { message, from, messageId } = actionPayload as ReceiveAction;

        return {
          ...update({} as SocketState, { $set: state }),
          [ from ]: update(state[ from ], {
            $push: [[ messageId, message ]],
          }),
        };
      }

      case (SocketActionTypes.clearConversations): {
        return update(state, { $set: socketInitialState });
      }

      case (SocketActionTypes.setConversations): {
        return {
          ...update({} as SocketState, { $set: state }),
          ...update(state, { $set: (actionPayload as SetConversationsAction).conversations }),
        };
      }

      default: {
        return update({} as SocketState, { $set: state });
      };
    }
  };
