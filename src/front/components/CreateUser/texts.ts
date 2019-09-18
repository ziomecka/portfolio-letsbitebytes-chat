import {
  MAX_LOGIN_LENGTH,
  MAX_PASSWORD_LENGTH,
  MIN_LOGIN_LENGTH,
  MIN_PASSWORD_LENGTH,
  SPECIAL_CHARACTERS,
} from '../../constants';

export default {
  HEADING: 'Create user',
  LOGIN_LABEL: 'Login',
  PASSWORD_LABEL: 'Password',
  CONFIRM_PASSWORD_LABEL: 'Confirm password',
  SUBMIT_BUTTON_TEXT: 'Create user',
  LOGIN_BUTTON_TEXT: 'Login',
  SERVER_ERROR_MESSAGE: 'Something went wrong. Please try again',
  SERVER_SUCCESS_MESSAGE: 'User created. You may',
  CONNECTION_ERROR_MESSAGE: 'Something went wrong. Please try again',
  LOGIN_ERROR:
    'Start from letter and use from ' +
    `${ MIN_LOGIN_LENGTH } to ${ MAX_LOGIN_LENGTH } letters or digits`,
  PASSWORD_ERROR:
    `Use from ${ MIN_PASSWORD_LENGTH } to ${ MAX_PASSWORD_LENGTH } ` +
    `letters, digits and at least one special character: ${ SPECIAL_CHARACTERS }`,
  CONFIRM_PASSWORD_ERROR: 'Confirm password does not match the password',
};
