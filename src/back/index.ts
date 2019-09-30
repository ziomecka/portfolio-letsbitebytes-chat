import('mime');
import('./databases/');
import * as express from 'express';
import * as helmet from 'helmet';
import {
  MONGO_URI,
  PORT,
  REDIS_URL,
} from './constants';
import { UsersManager } from './user/';
import { cors } from './cors';
import { logger } from './logger/';
import { router } from './router/';
import { socket } from './socket/';

const app = express();
const log = logger();

app.use(helmet());
app.use(cors());
app.set('trust proxy', 1);

router(app);

export const usersManager = new UsersManager(MONGO_URI, REDIS_URL);

const server = app.listen(PORT, () => log.info(`Listening on port: ${ PORT }`));

socket(server);
