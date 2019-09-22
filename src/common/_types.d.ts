declare type PaperElevation = 0 | 1 | 2;

declare interface MapStateToCommon {
  login: string;
}

declare interface CommonProps extends MapStateToCommon, WithStyles {
  appTitle?: string;
  elevation?: PaperElevation;
}

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
  logoutRoute = '/logout',
  publicRoute = '/',
  protectedRoute = '/protected',
}
