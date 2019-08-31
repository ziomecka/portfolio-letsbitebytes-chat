import { INITIAL_STATE } from './initial-state';
import { Reducer } from 'redux';
import { commonStateReducer } from './duck/';
import { conversationsReducer } from './components/Conversations/';
import { loginReducer } from './components/Login/'

const appReducer: Reducer<AppState, AppAction> = (state = INITIAL_STATE, action) => {
  return {
    user: loginReducer(state.user, action),
    conversations: conversationsReducer(state.conversations, action),
    ...commonStateReducer({ activeConversation: state.activeConversation }, action),
  };
};

export { appReducer };
