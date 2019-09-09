import * as path from 'path';
import {
  BUNDLE_PATH,
  NODE_ENV,
} from './constants';
import { logger } from '../../logger/';
const log = logger();
export const jsFiles = ( req: ExpressRequest, res: ExpressResponse): void => {
  res.set('Content-Type', 'text/javascript');

  if ( NODE_ENV === 'production' ) {
    log.log("path.join(BUNDLE_PATH, `${ req.url }.gz`)", path.join(BUNDLE_PATH, `${ req.url }.gz`));
    res.set('Content-Encoding', 'gzip');
    res.sendFile(path.join(BUNDLE_PATH, `${ req.url }.gz`));
  } else {
    res.sendFile(path.join(BUNDLE_PATH, req.url));
  }
};