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
};

const state = process.env.IS_BROWSER == 'true'
  ? (window as AppWindow)[ WINDOW_INITIAL_STATE ] as unknown as AppState
  : defaultInitialState;

export const initialState = {
  ...state,
  user: { ...state.user },
  users: [...state.users],
  conversations: { ...state.conversations },
};
