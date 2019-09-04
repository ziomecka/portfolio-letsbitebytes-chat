import * as path from 'path';

require('dotenv').config();

const { env: { NODE_ENV } } = process;

export const BUNDLE_URL = '/index.js';

export const BUNDLE_PATH = NODE_ENV === 'production'
  ? path.resolve(__dirname, '../../../deploy/')
  : path.resolve(__dirname, '../../build/');

export const {
  DEFAULT_USER,
  TRAINER_LOGIN,
  TRAINER_PASSWORD,
  TRAINEE_LOGIN,
  TRAINEE_PASSWORD
} = process.env;