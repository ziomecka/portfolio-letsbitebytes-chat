import * as path from 'path';
import { BUNDLE_PATH } from '../../constants';

export const serveCSSFiles = (req: ExpressRequest, res: ExpressResponse): void => {
  res.set('Content-Type', 'text/css');
  res.sendFile(path.join(BUNDLE_PATH, req.url));
};