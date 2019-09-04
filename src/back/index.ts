import('mime');
import('./redis/');
import * as express from 'express';
import * as helmet from 'helmet';
import { cors } from './cors';
import { logger } from './logger/';
import { router } from './router/';
import { socket } from './socket/';

require('dotenv').config();

const { PORT } = process.env;

const app = express();
const log = logger();

socket(app);
router(app);

app.use( helmet() );
app.use( cors() );
app.set('trust proxy', 1);

app.listen(PORT, () => log.info(`Listening on port: ${ PORT }`));