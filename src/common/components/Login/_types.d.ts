declare interface MapStateToLogin {
  isAuthenticated: boolean;
  userLogin: string;
  userPassword: string;
  waitForServer: boolean;
}

declare interface MapDispatchToLogin extends MapWaitForServerToDispatch {
  login(props: LoginActionProps):  Promise<boolean>;
}

declare interface LoginProps extends
MapStateToLogin,
MapDispatchToLogin {}

declare interface LoginWithRouterProps extends LoginProps, WithRouterProps {}

declare interface LoginState {
  login: string;
  password: string;
  loginError: boolean;
  connectionError: boolean;
}
