import * as path from 'path';
import { NODE_ENV } from '../../constants';

export { NODE_ENV };

const root = '../../../../';

export const BUNDLE_PATH = NODE_ENV === 'production'
  ? path.resolve(__dirname, root, '../deploy/')
  : path.resolve(__dirname, root, 'build/');
