import { commonStateReducer } from '../common/duck/';
import { initialState } from '../common';
import { loginReducer } from '../common/components/Login/';
import { socketReducer } from '../common/components/Socket/';

const appReducer: ReduxReducer<AppState, AppAction> = (state = initialState, action) => {
  return {
    user: loginReducer(state.user, action),
    conversations: socketReducer(state.conversations, action),
    ...commonStateReducer(
      {
        activeConversation: state.activeConversation,
        connectionState: state.connectionState,
        users: state.users,
      }, action as CommonActions
    ),
  };
};

export { appReducer };
