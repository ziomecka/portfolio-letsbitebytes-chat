import { commonStateReducer } from '../common/duck/';
import { initialState } from './initial-state';
import { loginReducer } from './components/Login/';
import { socketReducer } from './components/Socket/';
import update from 'immutability-helper';

const appReducer: ReduxReducer<AppState, AppAction> =
(state = update({} as AppState, { $set: initialState }), action) => {
  return {
    user: loginReducer(state.user, action),
    conversations: socketReducer(state.conversations, action),
    ...commonStateReducer(
      {
        activeConversation: state.activeConversation,
        connectionState: state.connectionState,
        users: state.users,
        dialog: state.dialog,
        notifications: state.notifications,
        waitForServer: state.waitForServer,
      }, action as CommonActions
    ),
  };
};

export { appReducer };
