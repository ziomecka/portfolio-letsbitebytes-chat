import * as React from 'react';
import {
  AppButton,
  AppForm,
} from '../';
import { TextField } from '@material-ui/core/';
import texts from './texts';

class Login extends React.Component<LoginWithRouterProps, LoginState> {
  private heading: string;
  private loginLabel: string;
  private passwordLabel: string;
  private submitButtonText: string;
  private loginErrorMessage: string;

  constructor (props: LoginWithRouterProps) {
    super(props);

    this.state = {
      login: props.userLogin,
      password: props.userPassword,
      confirmPassword: '',
      loginError: false,
      connectionError: false,
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
    this.heading = texts.heading;
    this.loginErrorMessage = texts.loginErrorMessage;
    this.loginLabel = texts.loginLabel;
    this.passwordLabel = texts.passwordLabel;
    this.submitButtonText = texts.submitButton;

    this.submit = this.submit.bind(this);
    this.submitOnEnter = this.submitOnEnter.bind(this);
    this.typeLogin = this.typeLogin.bind(this);
    this.typePassword = this.typePassword.bind(this);
  }

  private async submit (): Promise<void> {
    const { state: { login, password } } = this;

    this.props.activateWaitForServer();

    try {
      const result = await this.props.login({ login, password });

      if (!result) {
        this.props.deactivateWaitForServer();

        this.setState({
          loginError: true,
          connectionError: false,
        });
      }
    } catch {
      this.props.deactivateWaitForServer();

      this.setState({
        loginError: false,
        connectionError: true,
      });
    }
  }

  private submitOnEnter (event: React.KeyboardEvent<HTMLFormElement>): void {
    if (event.key.toLowerCase() === 'enter') {
      this.submit();
    }
  }

  private typeLogin (event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      login: event.target.value,
      loginError: false,
      connectionError: false,
    });
  }

  private typePassword (event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      password: event.target.value,
      loginError: false,
      connectionError: false,
    });
  }

  public render (): JSX.Element {
    return (
      <AppForm
        heading={this.heading}
        FormHelperProps={{
          error: this.state.loginError,
          errorMessage: this.loginErrorMessage,
          connectionError: this.state.connectionError,
        }}
        onKeyDown={this.submitOnEnter}
      >
        <TextField
          autoFocus
          required
          label={this.loginLabel}
          onChange={this.typeLogin}
          value={this.state.login}
        />
        <TextField
          required
          label={this.passwordLabel}
          onChange={this.typePassword}
          value={this.state.password}
          type={'password'}
        />
        <AppButton
          buttonProps={{
            onClick: this.submit,
            type: 'submit',
            disabled: this.props.waitForServer,
          }}
        >
          {this.submitButtonText}
        </AppButton>
      </AppForm>
    );
  }
}

export { Login };