declare interface MapStateToLogin {
  isAuthenticated: boolean;
  userLogin: string;
  userPassword: string;
}

declare interface MapDispatchToLogin {
  login(props: LoginActionProps):  Promise<boolean>;
}

declare interface LoginProps extends
MapStateToLogin,
MapDispatchToLogin {}

declare interface LoginWithRouterProps extends LoginProps, WithRouterProps {}

declare interface LoginState {
  login: string;
  password: string;
  confirmPassword: string;
  loginError: boolean;
  connectionError: boolean;
  waitingForResponse: boolean;
}
