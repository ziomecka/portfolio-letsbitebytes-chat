require('dotenv').config();
import * as CORS from 'cors';
import { RequestHandler } from 'express';

const { PORT } = process.env;

const localhost = `http://www.localhost:${ PORT }`;
const heroku = 'https://fathomless-wave-45820.herokuapp.com';
const whitelist = [ localhost, heroku ];

const exposedHeaders = [ 'Content-Type' ];

export const cors = (): RequestHandler => {
  const corsOptions = {
    exposedHeaders,
    credentials: true,
    optionsSuccessStatus: 200,
    origin: (origin: string, callback: (err: Error, result?: boolean) => void): void => {
      if (!whitelist.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  };

  return CORS(corsOptions);
};
