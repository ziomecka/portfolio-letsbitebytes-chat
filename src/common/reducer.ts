import {
  loginReducer,
  socketReducer,
  usersReducer,
} from './components';
import { commonStateReducer } from '../common/duck/';
import { initialState } from './initial-state';
import update from 'immutability-helper';

const appReducer: ReduxReducer<AppState, AppAction> =
(state = update({} as AppState, { $set: initialState }), action) => {
  return {
    user: loginReducer(state.user, action),
    conversations: socketReducer(state.conversations, action),
    users: usersReducer(state.users, action as UsersActions),
    ...commonStateReducer(
      {
        activeConversation: state.activeConversation,
        connectionState: state.connectionState,
        dialog: state.dialog,
        notifications: state.notifications,
        waitForServer: state.waitForServer,
        helper: state.helper,
      }, action as CommonActions
    ),
  };
};

export { appReducer };
