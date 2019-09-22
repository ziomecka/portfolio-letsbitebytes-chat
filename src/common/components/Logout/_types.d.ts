declare interface MapStateToLogout {
  isAuthenticated: boolean;
}

declare interface MapDispatchToLogout {
  logout():  Promise<boolean>;
}

declare interface LogoutProps extends MapStateToLogout, MapDispatchToLogout {}
declare interface LogoutWithRouterProps extends LogoutProps, WithRouterProps {}