declare interface MapStateToCreateUser {
}

declare interface MapDispatchToCreateUser {
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
  connectionError: boolean;
  serverResult?: boolean;
  serverError?: UserErrors | string;
}
