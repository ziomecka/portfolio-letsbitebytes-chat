declare interface CommonProps extends WithStyles {}
declare type WithRouterProps = import('react-router').RouteComponentProps;

declare const enum ServerRoutes {
  'createUserRoute' = '/createUser',
  'loginRoute' = '/login',
  'logoutRoute' = '/logout',
  'publicRoute' = '/',
  'protectedRoute' = '/protected',
}
