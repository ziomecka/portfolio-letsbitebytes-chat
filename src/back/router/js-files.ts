import * as path from 'path';
import {
  BUNDLE_PATH,
  NODE_ENV
} from '../constants';
import { NextFunction, Request, Response } from 'express';

export const serveJSFiles = ( req: Request, res: Response, next: NextFunction): void => {
  if ( NODE_ENV === 'production' ) {
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'text/javascript');

    req.url = path.resolve(BUNDLE_PATH, `${ req.url }.gz`);
  }
  next();
};