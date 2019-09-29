declare interface MapStateToLogout {
  isAuthenticated: boolean;
  waitForServer: boolean;
}

declare interface MapDispatchToLogout extends
MapWaitForServerToDispatch,
MapHelperToDispatch {
  logout():  Promise<boolean>;
}

declare interface LogoutProps extends MapStateToLogout, MapDispatchToLogout {}
declare interface LogoutWithRouterProps extends LogoutProps, WithRouterProps {}
