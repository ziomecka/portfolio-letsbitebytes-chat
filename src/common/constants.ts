export const APP_TITLE = 'Let\'s chat';
export const WINDOW_INITIAL_STATE = '__INITIAL_STATE__';

export const HTML_ROOT_ID = 'root';
export const SSR_STYLE_ROOT_ID = 'ssr-styles';
export const HTML_CONVERSATION_ID = 'lbb-conversation';
export const APP_ROOT_ID = 'lbb-root';
export const APP_MENU_ID = 'lbb-menu';
export const SIGNATURE_CLASS = 'lbb-signature';

export const MIN_LOGIN_LENGTH = 6;
export const MAX_LOGIN_LENGTH = 10;
export const MIN_PASSWORD_LENGTH = 6;
export const MAX_PASSWORD_LENGTH = 10;

export const SPECIAL_CHARACTERS = '!@#$%^&*()';

// start from letter
export const LOGIN_REGEXP =
  new RegExp(`(?=^.{${ MIN_LOGIN_LENGTH },${ MAX_LOGIN_LENGTH }}$)(^[a-z]\\w+$)`, 'i');

// include at least one special character at any position
export const PASSWORD_REGEXP =
  new RegExp(
    `(?=^.{${ MIN_PASSWORD_LENGTH },${ MAX_PASSWORD_LENGTH }}$)(^[\\w${ SPECIAL_CHARACTERS }]*[${ SPECIAL_CHARACTERS }]+[\\w${ SPECIAL_CHARACTERS }]*$)`, // eslint-disable-line max-len
    'i'
  );

const { IS_BROWSER } = process.env;

export const isBrowser = (IS_BROWSER as unknown as boolean) == true;
