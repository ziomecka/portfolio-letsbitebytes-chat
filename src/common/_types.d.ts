declare interface CommonProps extends WithStyles {}
declare type WithRouterProps = import('react-router').RouteComponentProps;

declare const enum ServerRoutes {
  'loginRoute' = '/login',
  'logoutRoute' = '/logout',
  'publicRoute' = '/',
  'protectedRoute' = '/protected',
}
