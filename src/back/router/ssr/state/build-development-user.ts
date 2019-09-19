import {
  DEFAULT_USER,
  IS_AUTHENTICATED,
  TRAINEE_LOGIN,
  TRAINEE_PASSWORD,
  TRAINER_LOGIN,
  TRAINER_PASSWORD,
} from '../../../constants';

export const buildDevelopmentUser = (): Partial<UserState> => {
  let login = '';
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
    isAuthenticated: IS_AUTHENTICATED === 'true',
  };
};
