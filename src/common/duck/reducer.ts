import { defaultInitialState } from '../../common/';

const commonStateReducer: ReduxReducer<CommonState, CommonActions> = (state, action) => {
  const { type, ...actionPayload } = action;

  switch (type) {
    case (CommonActionTypes.changeActiveConversation): {
      return {
        ...state,
        dialog: { ...state.dialog },
        activeConversation: (actionPayload as ChangeConversationAction).activeConversation,
      };
    }

    case (CommonActionTypes.changeConnectionState): {
      return {
        ...state,
        dialog: { ...state.dialog },
        connectionState: (actionPayload as ChangeSocketConnectionAction).connectionState,
      };
    }

    case (CommonActionTypes.setUsers): {
      return {
        ...state,
        dialog: { ...state.dialog },
        users: [...(actionPayload as SetUsersAction).users],
      };
    }

    case (DialogActionTypes.open): {
      return {
        ...state,
        users: { ...state.users },
        dialog: {
          ...state.dialog,
          ...actionPayload as OpenDialogAction,
          open: true,
        },
      };
    }

    case (DialogActionTypes.clear): {
      return {
        ...state,
        users: { ...state.users },
        dialog: {
          ...defaultInitialState.dialog,
          open: false,
        },
      };
    }

    case (DialogActionTypes.close): {
      return {
        ...state,
        users: { ...state.users },
        dialog: {
          ...state.dialog,
          open: false,
        },
      };
    }

    case (CommonActionTypes.setNotifications): {
      return {
        ...state,
        notifications: {
          actual: [...(actionPayload as SetNotificationsProps).notifications.actual],
          history: [...(actionPayload as SetNotificationsProps).notifications.history],
        },
      };
    }

    default: {
      return { ...state };
    }
  }
};

export { commonStateReducer };
