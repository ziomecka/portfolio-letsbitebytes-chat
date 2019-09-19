import { REDIS_URL } from '../constants';
import { createClient } from './redis';


export const redis = createClient(REDIS_URL);
export {
  MongoDB,
  createMongo,
} from './mongo/';

export {
  Redis,
  setData,
  stringData,
} from './redis/';
