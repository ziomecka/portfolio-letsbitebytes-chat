require('dotenv').config();

export const {
  DEFAULT_USER,
  IS_AUTHENTICATED = false,
  MONGO_URI,
  NODE_ENV,
  PORT,
  PRODUCTION_URL,
  REDIS_URL,
  REDIS_USER_EXP,
  TRAINER_LOGIN,
  TRAINER_PASSWORD,
  TRAINEE_LOGIN,
  TRAINEE_PASSWORD,
} = process.env;

export const BUNDLE_FILE = '/index.js';
export const VENDOR_FILE = '/vendor.js';

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export const DOMAIN = IS_PRODUCTION ? PRODUCTION_URL : 'localhost';

export const SESSION_COOKIE_NAME = 'lbbChat';
export const SESSION_COOKIE_AGE = 60 * 60 * 1000;

export const SESSION_STORAGE_PREFIX = 'lbbChat';
export const SESSION_STORAGE_AGE = 60 * 60 * 1000;

export {
  MAX_LOGIN_LENGTH,
  MAX_PASSWORD_LENGTH,
  MIN_LOGIN_LENGTH,
  MIN_PASSWORD_LENGTH,
} from '../common/constants';
