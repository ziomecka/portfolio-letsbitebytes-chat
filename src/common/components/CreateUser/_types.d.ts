declare interface MapStateToCreateUser {
  waitForServer: boolean;
}

declare interface MapDispatchToCreateUser extends
MapWaitForServerToDispatch,
MapHelperToDispatch {
  createUser(props: CreateUserActionProps): Promise<CreateUserResponse>;
}

declare interface CreateUserProps extends
MapStateToCreateUser,
MapDispatchToCreateUser {}

declare interface CreateUserWithRouterProps extends CreateUserProps {}

declare interface CreateUserState {
  login: string;
  password: string;
  confirmPassword: string;
  loginError: boolean;
  passwordError: boolean;
  confirmPasswordError: boolean;
  serverResult?: boolean;
}
