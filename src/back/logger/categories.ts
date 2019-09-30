// log4js.levels: ALL, TRACE, DEBUG, INFO, WARN, ERROR, FATAL, MARK, OFF
import { NODE_ENV } from '../constants';

const defaultAppenders = [ 'app', 'errors', 'console' ];
const messagesAppenders = [ 'app', 'errors', 'messages' ];
const mongoAppenders = [ 'app', 'errors', 'mongo' ];
const redisAppenders = [ 'app', 'errors', 'redis' ];
const socketAppenders = [ 'app', 'errors', 'socket' ];
const userAppenders = [ 'app', 'errors', 'user' ];
const userCacheAppenders = [ 'app', 'errors', 'userCache' ];
const userDatabaseAppenders = [ 'app', 'errors', 'userDatabase' ];
const userSessionAppenders = [ 'app', 'errors', 'usersSessions' ];

const stdout = 'out'; // for heroku logging
const level = 'ALL';

let categories = {
  default: {
    appenders: defaultAppenders.concat(stdout),
    level,
  },
  messages: {
    appenders: messagesAppenders.concat(stdout),
    level,
  },
  mongo: {
    appenders: mongoAppenders.concat(stdout),
    level,
  },
  redis: {
    appenders: redisAppenders.concat(stdout),
    level,
  },
  socket: {
    appenders: socketAppenders.concat(stdout),
    level,
  },
  user: {
    appenders: userAppenders.concat(stdout),
    level,
  },
  userCache: {
    appenders: userCacheAppenders.concat(stdout),
    level,
  },
  userDatabase: {
    appenders: userDatabaseAppenders.concat(stdout),
    level,
  },
  usersSessions: {
    appenders: userSessionAppenders.concat(stdout),
    level,
  },
} as unknown as { appenders: string[]; level: string; enableCallStack?: boolean; };

if (NODE_ENV !== 'production') {
  categories = {
    default: {
      appenders: defaultAppenders,
      level,
    },
    messages: {
      appenders: messagesAppenders,
      level,
    },
    mongo: {
      appenders: mongoAppenders,
      level,
    },
    redis: {
      appenders: redisAppenders,
      level,
    },
    socket: {
      appenders: socketAppenders,
      level,
    },
    user: {
      appenders: userAppenders,
      level,
    },
    userCache: {
      appenders: userCacheAppenders,
      level,
    },
    userDatabase: {
      appenders: userDatabaseAppenders,
      level,
    },
    usersSessions: {
      appenders: userSessionAppenders,
      level,
    },
  } as unknown as { appenders: string[]; level: string; enableCallStack?: boolean; };
}

export { categories };
