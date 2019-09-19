import { REDIS_URL } from '../constants';
import { createClient } from './redis';

export { mongoDB } from './mongo/';

export const redis = createClient(REDIS_URL);

export {
  Redis,
  setData,
  stringData,
} from './redis/';
