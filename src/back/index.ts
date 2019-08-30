import * as express from 'express';
import { router } from './router';
import { socket } from './socket/';

require('dotenv').config();

const { PORT } = process.env;

const app = express();

socket(app);
router(app);

app.listen(PORT, () => console.log(`Listening on port: ${ PORT }`));