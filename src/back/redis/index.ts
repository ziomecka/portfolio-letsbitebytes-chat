import * as Redis from 'redis';
import {
  getString,
  setString,
} from './data.structures/string';
import { delKey } from './data.structures';
import { logger } from '../logger/';

require('dotenv').config();
const { REDIS_URL } = process.env;

const log = logger();

const redis = Redis.createClient(REDIS_URL);

redis.on('connect', () => log.info('Connected to redis'));
redis.on ('error', (err) => log.error('Redis error: ', err));

const appRedis = Object.assign(redis, {
  getString: getString.bind(redis),
  setString: setString.bind(redis),
  delKey: delKey.bind(redis),
});

export { appRedis as redis };
