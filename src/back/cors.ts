import * as CORS from 'cors';
import { PORT } from './constants';
import { PRODUCTION_URL } from '../common/constants';
import { RequestHandler } from 'express';

const localhost = `http://www.localhost:${ PORT }`;
const whitelist = [
  localhost,
  `https://${ PRODUCTION_URL }`,
  `wss://${ PRODUCTION_URL }`,
];

const exposedHeaders = [
  'Content-Encoding',
  'Content-Length',
  'Content-Type',
];

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
