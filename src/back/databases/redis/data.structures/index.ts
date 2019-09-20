import {
  getString,
  setString,
} from './string';
import {
  sadd,
  smembers,
} from './set';
import { delKey } from './del.key';

export const stringData = {
  delKey,
  getString,
  setString,
};

export const setData = {
  delKey,
  sadd,
  smembers,
};

