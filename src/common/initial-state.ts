import {
  WINDOW_INITIAL_STATE,
  isBrowser,
} from './constants';

export const defaultInitialState: AppState = {
  user: {
    email: '',
    isAuthenticated: false,
    login: '',
    password: '',
    role: UserRole.unknown,
  },
  conversations: {} as Record<string, Statement[]>,
  activeConversation: '',
  connectionState: ConnectionState.unknown,
  contacts: [],
  dialog: {
    open: false,
    title: [],
    content: [],
    buttonsVariant: ButtonsVariants.ok,
  },
  notifications: {
    history: [],
    actual: [],
  },
  waitForServer: false,
  helper: {
    helperText: '',
  },
};

const state = isBrowser
  ? (window as AppWindow)[ WINDOW_INITIAL_STATE ] as unknown as AppState
  : defaultInitialState;

export const initialState = state;
