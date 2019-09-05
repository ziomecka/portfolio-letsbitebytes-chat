import * as path from 'path';
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

export const BUNDLE_URL = '/index.js';

export const BUNDLE_PATH = NODE_ENV === 'production'
  ? path.resolve(__dirname, '../../../deploy/')
  : path.resolve(__dirname, '../../build/');