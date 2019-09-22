declare interface LoginActionSuccess extends LoginActionProps, ReduxAction {}

declare type LoginActionFailure = ReduxAction;

declare type LoginActionProps = Partial<UserState>;

declare const enum LoginActionTypes {
  loginSuccess = '@APP/Login/login success',
  loginFailure = '@APP/Login/login failure',
}

declare interface UserState {
  isAuthenticated: boolean;
  role?: UserRole,
  login?: string;
  password?: string;
  email?: string;
}

declare type LoginActions = LoginActionSuccess | LoginActionFailure;