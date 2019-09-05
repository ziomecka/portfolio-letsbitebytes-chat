import * as React from 'react';
import {
  AppButton,
  AppRoutes,
} from '../../../common/';
import { TextField } from '@material-ui/core/';

interface LoginState {
  login: string;
  password: string;
  confirmPassword: string;
}

class Login extends React.Component<LoginProps, LoginState> {
  private submitButtonText: string;
  private loginLabel: string;
  private passwordLabel: string;
  constructor ( props: LoginProps ) {
    super( props );

    this.state = {
      login: props.userLogin,
      password: props.userPassword,
      confirmPassword: '',
    };

    this.submitButtonText = 'Submit';
    this.loginLabel = 'Login';
    this.passwordLabel = 'Password';

    this.submit = this.submit.bind(this);
    this.typeLogin = this.typeLogin.bind(this);
    this.typePassword = this.typePassword.bind(this);
  }

  public componentDidUpdate (prevProps: LoginProps): void {
    const { isAuthenticated } = this.props;
    const { isAuthenticated: prevIsAuthenticated } = prevProps;

    if (isAuthenticated !== prevIsAuthenticated && isAuthenticated) {
      // @ts-ignore
      this.props.history.push(AppRoutes.protectedRoute);
    }
  }

  private submit (): void {
    this.props.login({
      login: this.state.login,
      password: this.state.password
    });
  }

  private typeLogin (event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      login: event.target.value,
    });
  }

  private typePassword (event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      password: event.target.value,
    });
  }

  public render (): JSX.Element {
    return (
      <React.Fragment>
        <TextField
          autoFocus
          label={this.loginLabel}
          onChange={this.typeLogin}
          value={this.state.login}
        />
        <TextField
          label={this.passwordLabel}
          onChange={this.typePassword}
          value={this.state.password}
          type={"password"}
        />
        <AppButton
          buttonProps={{
            onClick: this.submit
          }}
        >
          {this.submitButtonText}
        </AppButton>
      </React.Fragment>
    );
  }
}

export { Login };
