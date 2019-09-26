declare type WithRouterProps = import('react-router').RouteComponentProps;

declare const enum ServerRoutes {
  createUserRoute = '/createUser',
  loginRoute = '/login',
  logoutRoute = '/logout',
  publicRoute = '/',
  protectedRoute = '/protected',
}

declare const enum AppRoutes {
  createUserRoute = '/createUser',
  loginRoute = '/login',
  publicRoute = '/',
  protectedRoute = '/protected',
}
