import * as React from 'react';
import {
  AppButton,
  AppRoutes,
} from '../../../common/';
import {
  FormHelperText,
  TextField,
  Typography,
} from '@material-ui/core/';
import {
  LOGIN_REGEXP,
  PASSWORD_REGEXP,
} from '../../constants';
import { Link } from 'react-router-dom';
import texts from './texts';
import { withPublisher } from 'publisher-subscriber-react-hoc';

interface CreateUserState {
  login: string;
  password: string;
  confirmPassword: string;
  loginError: boolean;
  passwordError: boolean;
  confirmPasswordError: boolean;
  connectionError: boolean;
  serverResult?: boolean;
  serverError?: UserErrors | string;
}

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
  private connectionErrorMessage: string;
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
    this.heading = texts.HEADING;
    this.serverErrorMessage = texts.SERVER_ERROR_MESSAGE;
    this.serverSuccessMessage = texts.SERVER_SUCCESS_MESSAGE;
    this.connectionErrorMessage = texts.CONNECTION_ERROR_MESSAGE;
    this.loginLabel = texts.LOGIN_LABEL;
    this.passwordLabel = texts.PASSWORD_LABEL;;
    this.confirmPasswordLabel = texts.CONFIRM_PASSWORD_LABEL;;
    this.submitButtonText = texts.SUBMIT_BUTTON_TEXT;
    this.loginButtonText = texts.LOGIN_BUTTON_TEXT;

    this.loginRegExp = LOGIN_REGEXP;
    this.passwordRegExp = PASSWORD_REGEXP;
    this.loginErrorMessage = texts.LOGIN_ERROR;
    this.passwordErrorMessage = texts.PASSWORD_ERROR;
    this.confirmPasswordErrorMessage = texts.CONFIRM_PASSWORD_ERROR;

    this.submit = this.submit.bind(this);
    this.submitOnEnter = this.submitOnEnter.bind(this);
    this.goToLogin = this.goToLogin.bind(this);
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

  private goToLogin (): void {
    this.props.history.push(AppRoutes.loginRoute);
  }

  private renderButton (disabled: boolean): JSX.Element {
    return (!this.state.serverResult
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
        <AppButton
          buttonProps={{
            onClick: this.goToLogin,
          }}
        >
          {this.loginButtonText}
        </AppButton>
      )
    );
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
      <form
        onSubmit={(event:React.FormEvent): void => event.preventDefault()}
      >
        <Typography variant="h2">
          {this.heading}
        </Typography>
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
        <FormHelperText
          error={serverResult === false || connectionError}
        >
          { serverResult === false && serverError }
          { connectionError && this.connectionErrorMessage }
          { serverResult && (
            <React.Fragment>
              { this.serverSuccessMessage }
              <Link to={AppRoutes.loginRoute}> login</Link>
            </React.Fragment>
          )}
        </FormHelperText>
        { this.renderButton(disabled) }
      </form>
    );
  }
}

const WrappedComponent = withPublisher(CreateUser);
export { WrappedComponent as CreateUser };
