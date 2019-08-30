import { ActionCreator } from "redux";

export const loginActionSuccess: ActionCreator<LoginActionSuccess> = (props: LoginActionProps) => ({
  type: LoginActionTypes.loginSuccess,
  ...props,
});

export const loginActionFailure: ActionCreator<LoginActionFailure> = () => ({
  type: LoginActionTypes.loginFailure
});