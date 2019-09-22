const commonStateReducer: ReduxReducer<CommonState, CommonActions> = (state, action) => {
  const { type, ...actionPayload } = action;

  switch (type) {
    case (CommonActionTypes.changeActiveConversation): {
      return {
        ...state,
        activeConversation: (actionPayload as ChangeConversationAction).activeConversation,
      };
    }

    case (CommonActionTypes.changeConnectionState): {
      return {
        ...state,
        connectionState: (actionPayload as ChangeSocketConnectionAction).connectionState,
      };
    }

    case (CommonActionTypes.setUsers): {
      return {
        ...state,
        users: [...(actionPayload as SetUsersAction).users],
      };
    }

    default: {
      return { ...state };
    }
  }
};

export { commonStateReducer };
