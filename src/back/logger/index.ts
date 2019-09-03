// log4js.levels: ALL, TRACE, DEBUG, INFO, WARN, ERROR, FATAL, MARK, OFF
import * as log4js from 'log4js';
import { config } from './config';

log4js.configure(config);

export const logger = (logger?: Loggers): log4js.Logger => {
  return log4js.getLogger(logger);
};