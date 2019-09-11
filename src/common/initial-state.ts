const email = '';
const isAuthenticated = false;
const login = '';
const password = '';
const role = UserRole.unknown;
const connectionState = ConnectionState.unknown; // to do is not in common

const conversations: Record<string, Statement[]> = {};
const activeConversation = '';

export const DEFAULT_INITIAL_STATE = {
  user: {
    email,
    isAuthenticated,
    login,
    password,
    role,
  },
  conversations,
  activeConversation,
  connectionState,
};
