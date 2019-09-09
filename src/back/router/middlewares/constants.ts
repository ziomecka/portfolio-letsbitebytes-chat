import * as path from 'path';
import { NODE_ENV } from '../../constants';
import { logger } from '../../logger/'
export { NODE_ENV };

const log = logger();

const root = '../../../../';

export const BUNDLE_PATH = NODE_ENV === 'production'
  ? path.resolve(__dirname, root, '../deploy/')
  : path.resolve(__dirname, root, 'build/');

log.info('BUNDLE_PATH', BUNDLE_PATH);