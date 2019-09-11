export const loginActionSuccess: ReduxActionCreator<LoginActionSuccess> =
(props: LoginActionProps) => ({
  type: LoginActionTypes.loginSuccess,
  ...props,
});

export const loginActionFailure: ReduxActionCreator<LoginActionFailure> = () => ({
  type: LoginActionTypes.loginFailure,
});
