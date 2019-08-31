import { WINDOW_INITIAL_STATE } from '../common/';

const email = 'initialEmail';
const isAuthenticated = false;
const login = 'initialLogin';
const password = 'initialPassword';
const role = 'initialRole';

const conversations: Statement[] = [];
const activeConversation = '';

const DEFAULT_INITIAL_STATE = {
  user: {
    email,
    isAuthenticated,
    login,
    password,
    role,
  },
  conversations,
  activeConversation
};

export const INITIAL_STATE = (
  {
    ...DEFAULT_INITIAL_STATE,
    ...(window as AppWindow)[ WINDOW_INITIAL_STATE ] as unknown as AppState
  }
);