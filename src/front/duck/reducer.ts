import { Reducer } from 'redux';

const commonStateReducer: Reducer<AppState, AppAction> = (state, action) => {
  const { type, ...actionPayload } = action;

  switch (type) {
    case (CommonActionTypes.changeActiveConversation): {
      return {
        user: { ...state.user },
        conversations: { ...state.conversations },
        activeConversation: (actionPayload as CommonActions).activeConversation
      };
    }
  }
};

export { commonStateReducer };