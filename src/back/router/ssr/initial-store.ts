import {
  DEFAULT_USER,
  IS_AUTHENTICATED,
  NODE_ENV,
  TRAINEE_LOGIN,
  TRAINEE_PASSWORD,
  TRAINER_LOGIN,
  TRAINER_PASSWORD,
} from '../../constants';

const authenticatedForDevelopment = (
  (NODE_ENV !== 'production') &&
  (IS_AUTHENTICATED === 'true')
);

const email = 'server_email';
const isAuthenticated = authenticatedForDevelopment;

let login = !isAuthenticated ? '' : 'trainer';
let password = '';
const activeConversation = '';

if (DEFAULT_USER === 'trainer') {
  login = TRAINER_LOGIN;
  password = TRAINER_PASSWORD;
} else if (DEFAULT_USER === 'trainee') {
  login = TRAINEE_LOGIN;
  password = TRAINEE_PASSWORD;
}

const role = UserRole.trainee;

const conversations = {
  'barUser': [
    [ new Date(Date.now()), 'bar', true ],
  ],
} as Conversations;

const connectionState: ConnectionState = ConnectionState.unknown;

export const initialStore = {
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
