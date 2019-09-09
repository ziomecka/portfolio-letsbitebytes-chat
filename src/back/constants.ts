require('dotenv').config();

export const {
  DEFAULT_USER,
  IS_AUTHENTICATED = false,
  NODE_ENV,
  PORT,
  REDIS_USER_EXP,
  TRAINER_LOGIN,
  TRAINER_PASSWORD,
  TRAINEE_LOGIN,
  TRAINEE_PASSWORD
} = process.env;

export const BUNDLE_FILE = '/index.js';
export const VENDOR_FILE = '/vendor.js';
