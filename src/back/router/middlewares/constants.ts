import * as path from 'path';
import { IS_PRODUCTION } from '../../constants';
export { IS_PRODUCTION };

const root = '../../../../';

export const BUNDLE_PATH = IS_PRODUCTION
  ? path.resolve(__dirname, root, '../deploy/')
  : path.resolve(__dirname, root, 'build/');
