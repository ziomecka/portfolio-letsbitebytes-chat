const commonStateReducer: ReduxReducer<CommonState, CommonActions> = (state, action) => {
  const { type, ...actionPayload } = action;

  switch (type) {
    case (CommonActionTypes.changeActiveConversation): {
      return {
        activeConversation: (actionPayload as ChangeConversationAction).activeConversation,
      };
    }

    default: {
      return { ...state };
    }
  }
};

export { commonStateReducer };
