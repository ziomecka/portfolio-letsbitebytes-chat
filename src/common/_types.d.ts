declare interface CommonProps extends WithStyles {}
declare type WithRouterProps = import('react-router').RouteComponentProps;

declare const enum ServerRoutes {
  'loginRoute' = '/login',
  'logoutRoute' = '/logout',
  'publicRoute' = '/',
  'protectedRoute' = '/protected',
}

declare const enum SocketMessages {
  'connection' = 'connection',
  'disconnect' = 'disconnect',
  'message' = 'message',
  'messageSuccess' = 'messageSuccess',
  'messageFailure' = 'messageFailure',
  'userConnected' = 'userConnected'
}

