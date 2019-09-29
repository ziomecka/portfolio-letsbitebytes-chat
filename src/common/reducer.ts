import {
  contactsReducer,
  dialogReducer,
  loginReducer,
  socketReducer,
} from './components';
import { commonStateReducer } from '../common/duck/';
import { initialState } from './initial-state';
import update from 'immutability-helper';

const appReducer: ReduxReducer<AppState, AppAction> =
(state = update({} as AppState, { $set: initialState }), action) => {
  return {
    user: loginReducer(state.user, action),
    conversations: socketReducer(state.conversations, action),
    contacts: contactsReducer(state.contacts, action as ContactsActions),
    dialog: dialogReducer(state.dialog, action as DialogActions),
    ...commonStateReducer(
      {
        activeConversation: state.activeConversation,
        connectionState: state.connectionState,
        notifications: state.notifications,
        waitForServer: state.waitForServer,
        helper: state.helper,
      }, action as CommonActions
    ),
  };
};

export { appReducer };
