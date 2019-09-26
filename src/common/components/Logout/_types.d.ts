declare interface MapStateToLogout {
  isAuthenticated: boolean;
}

declare interface MapDispatchToLogout {
  logout():  Promise<boolean>;
  addNotification(props: OpenDialogProps): AddNotificationAction;
}

declare interface LogoutProps extends MapStateToLogout, MapDispatchToLogout {}
declare interface LogoutWithRouterProps extends LogoutProps, WithRouterProps {}

declare interface LogoutState {
  waitingForResponse: boolean;
}