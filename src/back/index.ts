import * as express from 'express';
import { router } from './router';

require('dotenv').config();

const { PORT } = process.env;

const app = express();

router(app);

app.listen(PORT, () => console.log(`Listening on port: ${ PORT }`));