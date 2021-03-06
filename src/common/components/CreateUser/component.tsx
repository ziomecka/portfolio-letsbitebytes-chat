import * as React from 'react';
import {
  AppButton,
  AppForm,
  RouterButton,
} from '../';
import {
  LOGIN_REGEXP,
  PASSWORD_REGEXP,
} from '../../constants';
import {
  TextField,
  Typography,
} from '@material-ui/core/';
import { Link } from 'react-router-dom';
import texts from './texts';

class CreateUser extends React.Component<CreateUserWithRouterProps, CreateUserState> {
  private loginRegExp: RegExp;
  private passwordRegExp: RegExp;
  private texts: Record<string, string>;
  constructor (props: CreateUserWithRouterProps) {
    super(props);

    this.state = {
      login: '',
      password: '',
      confirmPassword: '',
      loginError: false,
      passwordError: false,
      confirmPasswordError: false,
      serverResult: undefined,
    };

    this.init();
  }

  private init (): void {
    this.loginRegExp = LOGIN_REGEXP;
    this.passwordRegExp = PASSWORD_REGEXP;
    this.texts = texts;

    this.submit = this.submit.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.typeLogin = this.typeLogin.bind(this);
    this.typePassword = this.typePassword.bind(this);
    this.typeConfirmPassword = this.typeConfirmPassword.bind(this);
  }

  private async submit (): Promise<void> {
    const {
      props,
      state: {
        login,
        password,
        confirmPassword,
        loginError,
        passwordError,
        confirmPasswordError,
      },
      texts,
    } = this;

    if (!loginError && !passwordError && !confirmPasswordError) {
      try {
        props.activateWaitForServer();

        const { result, error } = await props.createUser({ login, password, confirmPassword });

        props.deactivateWaitForServer();

        const newState = { serverResult: result };

        if (result) {
          Object.assign(newState, {
            login: '',
            password: '',
            confirmPassword: '',
          });
        }

        if (!result || error) {
          props.addHelper({ helperText: texts.serverError });
        }

        this.setState(newState);
      } catch {
        props.deactivateWaitForServer();
        props.addHelper({ helperText: texts.serverError });
        this.setState({ serverResult: false });
      }
    }
  }

  private onKeyDown (event: React.KeyboardEvent<HTMLFormElement>): void {
    if (event.key.toLowerCase() === 'enter') {
      event.preventDefault();
      this.submit();
    }
    this.props.helperText && this.props.removeHelper();
  }

  private typeLogin ({ target: { value } }: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      login: value,
      loginError: !this.loginRegExp.test(value),
      serverResult: undefined,
    });
  }

  private typeConfirmPassword ({ target: { value } }: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      confirmPassword: value,
      confirmPasswordError: this.state.password && value && this.state.password !== value,
      serverResult: undefined,
    });
  }

  private typePassword ({ target: { value } }: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      password: value,
      passwordError: !this.passwordRegExp.test(value),
      serverResult: undefined,
    });
  }

  public render (): JSX.Element {
    const {
      texts,
      state: {
        login,
        password,
        confirmPassword,
        loginError,
        passwordError,
        confirmPasswordError,
      },
      props: { waitForServer },
    } = this;

    const disabled = (
      !login ||
      !password ||
      !confirmPassword ||
      waitForServer ||
      loginError ||
      passwordError ||
      confirmPasswordError
    );

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
          value={login}
          error={loginError}
          helperText={loginError ? texts.loginError : ''}
        />
        <TextField
          required
          label={texts.passwordLabel}
          onChange={this.typePassword}
          value={password}
          type={'password'}
          error={passwordError}
          helperText={passwordError ? texts.passwordError : ''}
        />
        <TextField
          required
          label={texts.confirmPasswordLabel}
          onChange={this.typeConfirmPassword}
          value={confirmPassword}
          type={'password'}
          error={confirmPasswordError}
          helperText={confirmPasswordError ? texts.confirmPasswordError : ''}
        />
        { this.renderButtons(disabled) }
      </AppForm>
    );
  }

  private renderButtons (disabled: boolean): JSX.Element {
    const { texts } = this;
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
              {texts.submitButton}
            </AppButton>
          )
          : (
            <React.Fragment>
              <Typography style={{ whiteSpace: 'pre-wrap' }}>
                {`${ texts.serverSuccess } `}
                <Typography component="span" color="secondary">
                  <Link to={AppRoutes.loginRoute}>
                    { texts.loginLabel.toLowerCase() }
                  </Link>
                </Typography>
              </Typography>
              <RouterButton to={AppRoutes.loginRoute}>
                {texts.loginButton}
              </RouterButton>
            </React.Fragment>
          )
        }
      </React.Fragment>
    );
  }
}

export { CreateUser };
