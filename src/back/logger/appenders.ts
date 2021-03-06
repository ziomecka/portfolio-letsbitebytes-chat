// log4js.levels: ALL, TRACE, DEBUG, INFO, WARN, ERROR, FATAL, MARK, OFF
const pattern = '%d %p %c | %m%n';

const layout = {
  type: 'pattern',
  pattern,
};

export const appenders = {
  app: {
    type: 'file',
    filename: 'log/app.log',
    layout,
  },
  errorsFile: {
    type: 'file',
    filename: 'log/errors.log',
    layout,
  },
  errors: {
    type: 'logLevelFilter',
    level: 'ERROR',
    appender: 'errorsFile',
  },
  console: {
    type: 'console',
    layout,
  },
  messages: {
    type: 'file',
    filename: 'log/messages.log',
    layout,
  },
  mongo: {
    type: 'file',
    filename: 'log/mongo.log',
    layout,
  },
  redis: {
    type: 'file',
    filename: 'log/redis.log',
    layout,
  },
  socket: {
    type: 'file',
    filename: 'log/socket.log',
    layout,
  },
  user: {
    type: 'file',
    filename: 'log/user.log',
    layout,
  },
  userCache: {
    type: 'file',
    filename: 'log/user-cache.log',
    layout,
  },
  usersDatabase: {
    type: 'file',
    filename: 'log/user-database.log',
    layout,
  },
  usersSessions: {
    type: 'file',
    filename: 'log/user-session.log',
    layout,
  },
  out: {
    type: 'stdout', // for heroku
  },
};
