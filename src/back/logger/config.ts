// log4js.levels: ALL, TRACE, DEBUG, INFO, WARN, ERROR, FATAL, MARK, OFF
const pattern = '%d %p %c | %m%n';

const layout = {
  type: 'pattern',
  pattern,
};

export const config = {
  appenders: {
    app: {
      type: 'file',
      filename: 'log/app.log',
      layout,
    },
    errors: {
      type: 'logLevelFilter',
      level: 'ERROR',
      appender: 'errorsOutput',
    },
    errorsOutput: {
      type: 'file',
      filename: 'log/errors.log',
      layout
    },
    console: {
      type: 'console',
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
  },
  categories: {
    default: {
      appenders: [ 'app', 'errors', 'console' ],
      level: 'ALL',
    },
    redis: {
      appenders: [ 'app', 'errors', 'redis' ],
      level: 'ALL',
    },
    socket: {
      appenders: [ 'app', 'errors', 'socket' ],
      level: 'ALL',
    },
    user: {
      appenders: [ 'app', 'errors', 'user' ],
      level: 'ALL',
    },
  },
};