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

declare type ReduxAction = import('redux').Action;
declare type ReduxActionCreator<A> = import('redux').ActionCreator<A>;
declare type ReduxDispatch = import('redux').Dispatch;
declare type ReduxReducer<S, A> = import('redux').Reducer<S, A>;
declare type ReduxStore = import('redux').Store;

declare type WithStyles = import('@material-ui/core/styles').WithStyles;
