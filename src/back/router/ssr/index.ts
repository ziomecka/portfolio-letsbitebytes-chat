import {
  Request,
  Response,
} from 'express';
import { getHtml } from './get-html';
import { store } from './store';

export const serveHtml = (req: Request, res: Response): void => {
  res.type('html').send(getHtml(store));
};