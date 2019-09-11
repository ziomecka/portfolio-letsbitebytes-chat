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
  loginError: boolean;
  connectionError: boolean;
}

const LOGIN_LABEL = 'Login';
const PASSWORD_LABEL = 'Password';
const SUBMIT_BUTTON_TEXT = 'Submit';

const KEYBOARD_EVENT = 'keydown';

class Login extends React.Component<LoginWithRouterProps, LoginState> {
  private keyboardEvent: string;

  private loginLabel: string;
  private passwordLabel: string;
  private submitButtonText: string;

  private unsubscribe: () => void;
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

  private init (): void {
    this.loginLabel = LOGIN_LABEL;
    this.passwordLabel = PASSWORD_LABEL;;
    this.submitButtonText = SUBMIT_BUTTON_TEXT;

    this.submit = this.submit.bind(this);
    this.submitOnEnter = this.submitOnEnter.bind(this);
    this.typeLogin = this.typeLogin.bind(this);
    this.typePassword = this.typePassword.bind(this);

    this.keyboardEvent = KEYBOARD_EVENT;
    this.unsubscribe = this.props.subscribe(this.keyboardEvent, this.submitOnEnter);
  }

  private async submit (): Promise<void> {
    const { state: { login, password } } = this;

    try {
      const result = await this.props.login({ login, password });

      if (!result) {
        this.setState({
          loginError: true,
          connectionError: false,
        });
      }
    } catch {
      this.setState({
        loginError: false,
        connectionError: true,
      });
    }
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
