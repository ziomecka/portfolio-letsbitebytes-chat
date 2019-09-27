import { WINDOW_INITIAL_STATE } from './constants';

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
  users: [],
  dialog: {
    open: false,
    title: [],
    content: [],
    closeButton: true,
    buttonsVariant: ButtonsVariants.ok,
  },
  notifications: {
    history: [],
    actual: [],
  },
};

const state = process.env.IS_BROWSER
  ? (window as AppWindow)[ WINDOW_INITIAL_STATE ] as unknown as AppState
  : defaultInitialState;

export const initialState = state;
