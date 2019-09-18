export const DEFAULT_INITIAL_STATE = {
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
