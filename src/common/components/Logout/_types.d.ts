declare interface MapStateToLogout {
  isAuthenticated: boolean;
  waitForServer: boolean;
}

declare interface MapDispatchToLogout extends MapWaitForServerToDispatch {
  logout():  Promise<boolean>;
  addNotification(props: OpenDialogProps): AddNotificationAction;
}

declare interface LogoutProps extends MapStateToLogout, MapDispatchToLogout {}
declare interface LogoutWithRouterProps extends LogoutProps, WithRouterProps {}
