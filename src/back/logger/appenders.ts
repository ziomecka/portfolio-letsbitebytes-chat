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
    layout
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
  out: {
    type: 'stdout', // for heroku
  },
};