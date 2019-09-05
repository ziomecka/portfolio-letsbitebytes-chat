import('mime');
import('./redis/');
import * as express from 'express';
import * as helmet from 'helmet';
import { PORT } from './constants';
import { cors } from './cors';
import { logger } from './logger/';
import { router } from './router/';
import { socket } from './socket/';

const app = express();
const log = logger();

router(app);

app.use( helmet() );
app.use( cors() );
app.set('trust proxy', 1);

const server = app.listen(PORT, () => log.info(`Listening on port: ${ PORT }`));

socket(server);