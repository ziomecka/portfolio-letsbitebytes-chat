declare const enum ServerRoutes {
  'loginRoute' = '/login',
  'logoutRoute' = '/logout',
  'publicRoute' = '/',
}

declare const enum SocketMessages {
  'connection' = 'connection',
  'disconnect' = 'disconnect',
  'message' = 'message',
  'messageSuccess' = 'messageSuccess',
  'messageFailure' = 'messageFailure',
  'userConnected' = 'userConnected'
}