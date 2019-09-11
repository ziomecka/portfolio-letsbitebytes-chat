export const loginActionSuccess: ReduxActionCreator<LoginActionSuccess> =
(props: LoginActionProps) => ({
  type: LoginActionTypes.loginSuccess,
  ...props,
});
