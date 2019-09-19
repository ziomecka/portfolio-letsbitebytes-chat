import * as React from 'react';
import {
  AppButton,
  AppRoutes,
} from '../../../common/';
import {
  AppForm,
  RouterButton,
} from '../';
import {
  LOGIN_REGEXP,
  PASSWORD_REGEXP,
} from '../../constants';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core/';
import texts from './texts';
import { withPublisher } from 'publisher-subscriber-react-hoc';

const KEYBOARD_EVENT = 'keydown';

class CreateUser extends React.Component<CreateUserWithRouterProps, CreateUserState> {
  private keyboardEvent: string;
  private loginRegExp: RegExp;
  private passwordRegExp: RegExp;

  private heading: string;
  private loginLabel: string;
  private passwordLabel: string;
  private confirmPasswordLabel: string;
  private submitButtonText: string;
  private loginButtonText: string;
  private serverErrorMessage: string;
  private serverSuccessMessage: string;
  private loginErrorMessage: string;
  private passwordErrorMessage: string;
  private confirmPasswordErrorMessage: string;

  private unsubscribe: () => void;
  constructor (props: CreateUserWithRouterProps) {
    super(props);

    this.state = {
      login: '',
      password: '',
      confirmPassword: '',
      loginError: false,
      passwordError: false,
      confirmPasswordError: false,
      connectionError: false,
      serverResult: undefined,
      serverError: undefined,
    };

    this.init();
  }

  public componentWillUnmount (): void {
    this.unsubscribe();
  }

  private init (): void {
    this.heading = texts.heading;
    this.serverErrorMessage = texts.serverErrorMessage;
    this.serverSuccessMessage = texts.serverSuccessMessage;
    this.loginLabel = texts.loginLabel;
    this.passwordLabel = texts.passwordLabel;
    this.confirmPasswordLabel = texts.confirmPasswordLabel;
    this.submitButtonText = texts.submitButton;
    this.loginButtonText = texts.loginButton;
    this.loginErrorMessage = texts.loginError;
    this.passwordErrorMessage = texts.passwordError;
    this.confirmPasswordErrorMessage = texts.confirmPasswordError;

    this.loginRegExp = LOGIN_REGEXP;
    this.passwordRegExp = PASSWORD_REGEXP;

    this.submit = this.submit.bind(this);
    this.submitOnEnter = this.submitOnEnter.bind(this);
    this.typeLogin = this.typeLogin.bind(this);
    this.typePassword = this.typePassword.bind(this);
    this.typeConfirmPassword = this.typeConfirmPassword.bind(this);

    this.keyboardEvent = KEYBOARD_EVENT;
    this.unsubscribe = this.props.subscribe(this.keyboardEvent, this.submitOnEnter);
  }

  private async submit (): Promise<void> {
    const {
      state: {
        login,
        password,
        confirmPassword,
        loginError,
        passwordError,
        confirmPasswordError,
      },
    } = this;

    if (!loginError && !passwordError && !confirmPasswordError) {
      try {
        const { result, error } = await this.props.createUser({ login, password, confirmPassword });

        this.setState({
          serverResult: result,
          serverError: error,
          connectionError: false,
        });
      } catch {
        this.setState({
          serverResult: false,
          serverError: this.serverErrorMessage,
          connectionError: true,
        });
      }
    }
  }

  private submitOnEnter (event: React.KeyboardEvent<HTMLFormElement>): void {
    if (event.key.toLowerCase() === 'enter') {
      event.preventDefault();
      this.submit();
    }
  }

  private typeLogin ({ target: { value } }: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      login: value,
      loginError: !this.loginRegExp.test(value),
      serverResult: undefined,
      connectionError: false,
    });
  }

  private typeConfirmPassword ({ target: { value } }: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      confirmPassword: value,
      confirmPasswordError: this.state.password && value && this.state.password !== value,
      serverResult: undefined,
      connectionError: false,
    });
  }

  private typePassword ({ target: { value } }: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      password: value,
      passwordError: !this.passwordRegExp.test(value),
      serverResult: undefined,
      connectionError: false,
    });
  }

  public render (): JSX.Element {
    const {
      state: {
        login,
        password,
        confirmPassword,
        connectionError,
        serverResult,
        loginError,
        passwordError,
        confirmPasswordError,
        serverError,
      },
    } = this;

    const disabled = (
      !login || !password || !confirmPassword || loginError || passwordError || confirmPasswordError
    );

    return (
      <AppForm
        heading={this.heading}
        formHelperProps={{
          error: serverResult === false,
          errorMessage: serverError,
          connectionError,
        }}
      >
        <TextField
          autoFocus
          required
          label={this.loginLabel}
          onChange={this.typeLogin}
          value={login}
          error={loginError}
          helperText={loginError && this.loginErrorMessage}
        />
        <TextField
          required
          label={this.passwordLabel}
          onChange={this.typePassword}
          value={password}
          type={'password'}
          error={passwordError}
          helperText={passwordError && this.passwordErrorMessage}
        />
        <TextField
          required
          label={this.confirmPasswordLabel}
          onChange={this.typeConfirmPassword}
          value={confirmPassword}
          type={'password'}
          error={confirmPasswordError}
          helperText={confirmPasswordError && this.confirmPasswordErrorMessage}
        />
        { this.renderButtons(disabled) }
      </AppForm>
    );
  }

  private renderButtons (disabled: boolean): JSX.Element {
    return (
      <React.Fragment>
        { !this.state.serverResult
          ? (
            <AppButton
              buttonProps={{
                onClick: this.submit,
                disabled,
                type: 'submit',
              }}
            >
              {this.submitButtonText}
            </AppButton>
          )
          : (
            <React.Fragment>
              { this.serverSuccessMessage }
              <Link to={AppRoutes.loginRoute}>{ this.loginLabel }</Link>

              <RouterButton
                to={AppRoutes.loginRoute}
              >
                {this.loginButtonText}
              </RouterButton>
            </React.Fragment>
          )
        }
      </React.Fragment>
    );
  }
}

const WrappedComponent = withPublisher(CreateUser);
export { WrappedComponent as CreateUser };
