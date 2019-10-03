import * as React from 'react';
import {
  AppButton,
  AppForm,
} from '../';
import { TextField } from '@material-ui/core/';
import texts from './texts';

class Login extends React.Component<LoginWithRouterProps, LoginState> {
  private texts: Record<string, string>
  constructor (props: LoginWithRouterProps) {
    super(props);

    this.state = {
      login: props.userLogin,
      password: props.userPassword,
    };

    this.init();
  }

  public componentDidUpdate ({ isAuthenticated: prevIsAuthenticated }: LoginProps): void {
    const { isAuthenticated } = this.props;

    if (isAuthenticated !== prevIsAuthenticated && isAuthenticated) {
      this.props.history.push(AppRoutes.protectedRoute);
    }
  }

  private init (): void {
    this.texts = texts;

    this.submit = this.submit.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.typeLogin = this.typeLogin.bind(this);
    this.typePassword = this.typePassword.bind(this);
  }

  private async submit (): Promise<void> {
    const {
      props,
      state: { login, password },
      texts,
    } = this;

    props.activateWaitForServer();

    try {
      const result = await props.login({ login, password });

      if (!result) {
        props.deactivateWaitForServer();
        props.addHelper(({ helperText: texts.loginError }));
      }
    } catch {
      props.deactivateWaitForServer();
      props.addHelper(({ helperText: texts.connectionError }));
    }
  }

  private onKeyDown (event: React.KeyboardEvent<HTMLFormElement>): void {
    if (event.key.toLowerCase() === 'enter') {
      event.preventDefault();
      this.submit();
    }
    this.props.helperText && this.props.removeHelper();
  }

  private typeLogin (event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ login: event.target.value });
  }

  private typePassword (event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ password: event.target.value });
  }

  public render (): JSX.Element {
    const { state, texts } = this;
    return (
      <AppForm
        heading={texts.heading}
        onKeyDown={this.onKeyDown}
      >
        <TextField
          autoFocus
          required
          label={texts.loginLabel}
          onChange={this.typeLogin}
          value={state.login}
        />
        <TextField
          required
          label={texts.passwordLabel}
          onChange={this.typePassword}
          value={state.password}
          type={'password'}
        />
        <AppButton
          buttonProps={{
            onClick: this.submit,
            type: 'submit',
            disabled: this.props.waitForServer,
          }}
        >
          {texts.submitButton}
        </AppButton>
      </AppForm>
    );
  }
}

export { Login };
