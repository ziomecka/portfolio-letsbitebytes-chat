import * as React from 'react';
import {
  AppButton,
  AppRoutes,
} from '../../../common/';
import { TextField } from '@material-ui/core/';
import { withPublisher } from 'publisher-subscriber-react-hoc';

interface LoginState {
  login: string;
  password: string;
  confirmPassword: string;
}

class Login extends React.Component<LoginWithRouterProps, LoginState> {
  private submitButtonText: string;
  private keyboardEvent: string;
  private loginLabel: string;
  private passwordLabel: string;
  private unsubscribe: () => void;
  constructor (props: LoginWithRouterProps) {
    super(props);

    this.state = {
      login: props.userLogin,
      password: props.userPassword,
      confirmPassword: '',
    };

    this.submitButtonText = 'Submit';
    this.loginLabel = 'Login';
    this.passwordLabel = 'Password';

    this.submit = this.submit.bind(this);
    this.submitOnEnter = this.submitOnEnter.bind(this);
    this.typeLogin = this.typeLogin.bind(this);
    this.typePassword = this.typePassword.bind(this);

    this.keyboardEvent = 'keydown';
    this.unsubscribe = props.subscribe(this.keyboardEvent, this.submitOnEnter);
  }

  public componentDidUpdate (prevProps: LoginProps): void {
    const { isAuthenticated } = this.props;
    const { isAuthenticated: prevIsAuthenticated } = prevProps;

    if (isAuthenticated !== prevIsAuthenticated && isAuthenticated) {
      this.props.history.push(AppRoutes.protectedRoute);
    }
  }

  public componentWillUnmount (): void {
    this.unsubscribe();
  }

  private submit (): void {
    this.props.login({
      login: this.state.login,
      password: this.state.password,
    });
  }

  // TODO async
  private submitOnEnter (event: React.KeyboardEvent<HTMLFormElement>): void {
    if (event.key.toLowerCase() === 'enter') {
      this.submit();
    }
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
      <form>
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
          }}
        >
          {this.submitButtonText}
        </AppButton>
      </form>
    );
  }
}

const LoginWithPublisherProps = withPublisher(Login);
export { LoginWithPublisherProps as Login };
