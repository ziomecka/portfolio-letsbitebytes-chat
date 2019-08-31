import { Reducer } from 'redux';

const commonStateReducer: Reducer<CommonState, AppAction> = (state, action) => {
  const { type, ...actionPayload } = action;

  switch (type) {
    case (CommonActionTypes.changeActiveConversation): {
      return {
        activeConversation: (actionPayload as CommonActions).activeConversation
      };
    }

    default: {
      return { ...state };
    }
  }
};

export { commonStateReducer };