import * as path from 'path';
import {
  BUNDLE_PATH,
  IS_PRODUCTION,
} from './constants';

export const jsFiles = (req: ExpressRequest, res: ExpressResponse): void => {
  res.set('Content-Type', 'text/javascript');

  if (IS_PRODUCTION) {
    res.set('Content-Encoding', 'gzip');
    res.sendFile(path.join(BUNDLE_PATH, `${ req.url }.gz`));
  } else {
    res.sendFile(path.join(BUNDLE_PATH, req.url));
  }
};
