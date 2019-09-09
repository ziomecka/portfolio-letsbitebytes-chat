import { INITIAL_STATE } from './initial-state';
import { Reducer } from 'redux';
import { commonStateReducer } from './duck/';
import { loginReducer } from './components/Login/';
import { socketReducer } from './components/Socket/';

const appReducer: Reducer<AppState, AppAction> = (state = INITIAL_STATE, action) => {
  return {
    user: loginReducer(state.user, action),
    conversations: socketReducer(state.conversations, action),
    ...commonStateReducer(
      { activeConversation: state.activeConversation }, action as CommonActions
    ),
  };
};

export { appReducer };
