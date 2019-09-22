import {
  MAX_LOGIN_LENGTH,
  MAX_PASSWORD_LENGTH,
  MIN_LOGIN_LENGTH,
  MIN_PASSWORD_LENGTH,
  SPECIAL_CHARACTERS,
} from '../../constants';

export default {
  heading: 'Create user',
  loginLabel: 'Login',
  passwordLabel: 'Password',
  confirmPasswordLabel: 'Confirm password',
  submitButton: 'Create user',
  loginButton: 'Login',
  serverErrorMessage: 'Something went wrong. Please try again',
  serverSuccessMessage: 'User created. You may',
  loginError:
    'Start from letter and use from ' +
    `${ MIN_LOGIN_LENGTH } to ${ MAX_LOGIN_LENGTH } letters or digits`,
  passwordError:
    `Use from ${ MIN_PASSWORD_LENGTH } to ${ MAX_PASSWORD_LENGTH } ` +
    `letters, digits and at least one special character: ${ SPECIAL_CHARACTERS }`,
  confirmPasswordError: 'Confirm password does not match the password',
};
