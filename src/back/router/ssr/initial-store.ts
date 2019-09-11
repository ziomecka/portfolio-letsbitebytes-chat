import {
  DEFAULT_USER,
  IS_AUTHENTICATED,
  NODE_ENV,
  TRAINEE_LOGIN,
  TRAINEE_PASSWORD,
  TRAINER_LOGIN,
  TRAINER_PASSWORD,
} from '../../constants';

import {
  DEFAULT_INITIAL_STATE as defaultInitialState,
} from '../../../common/';

const buildUser = (): Partial<UserState> => {
  const isAuthenticated = (
    (NODE_ENV !== 'production') &&
    (IS_AUTHENTICATED === 'true')
  );

  let login = !isAuthenticated ? '' : 'trainer';
  let password = '';
  let role = UserRole.unknown;

  if (DEFAULT_USER === 'trainer') {
    login = TRAINER_LOGIN;
    password = TRAINER_PASSWORD;
    role = UserRole.trainer;
  } else if (DEFAULT_USER === 'trainee') {
    login = TRAINEE_LOGIN;
    password = TRAINEE_PASSWORD;
    role = UserRole.trainee;
  }

  return {
    login,
    password,
    role,
    isAuthenticated,
  };
};

export const buildInitialStore = (state: PartialAppState = { user: {} }): AppState => {
  return {
    ...defaultInitialState,
    conversations: {} as Conversations,
    connectionState: ConnectionState.unknown,
    ...state, // todo copy conversations
    user: {
      ...defaultInitialState.user,
      ...buildUser,
      ...state.user,
    },
  };
};
