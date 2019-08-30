import { INITIAL_STATE } from '../../../initial-state';

const DEFAULT_LOGIN = 'initialLogin';
const DEFAULT_PASSWORD = 'initialPassword';
const DEFAULT_IS_AUTHENTICATED = false;
const DEFAULT_ROLE = 'initialRole';
const DEFAULT_EMAIL = 'initialEmail';

export const loginInitialState = {
  login: DEFAULT_LOGIN,
  password: DEFAULT_PASSWORD,
  isAuthenticated: DEFAULT_IS_AUTHENTICATED,
  role: DEFAULT_ROLE,
  email: DEFAULT_EMAIL,
  ...INITIAL_STATE.user,
} as UserState;
