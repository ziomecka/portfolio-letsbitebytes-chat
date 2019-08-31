import {
  DEFAULT_USER,
  TRAINEE_LOGIN,
  TRAINEE_PASSWORD,
  TRAINER_LOGIN,
  TRAINER_PASSWORD,
} from '../constants';

const email = 'server_email';
const isAuthenticated = false;

let login = '';
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
    [ new Date(Date.now()), 'bar', true ] // if no cast (string | boolean | Date)[] instead of [Date, string, boolean]
  ]
} as Conversations;


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
};