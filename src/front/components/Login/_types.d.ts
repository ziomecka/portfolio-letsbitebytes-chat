declare interface MapStateToLogin {
  isAuthenticated: boolean;
  userLogin: string;
  userPassword: string;
}

declare interface MapDispatchToLogin {
  login(props: LoginActionProps):  Promise<LoginActions>;
}

declare interface LoginProps extends MapStateToLogin, MapDispatchToLogin, WithPublisherProps {
  subscribe(e: string, eventCallback: EventCallback<React.KeyboardEvent<HTMLFormElement>>): () => void
}

declare interface LoginWithRouterProps extends LoginProps, WithRouterProps {}