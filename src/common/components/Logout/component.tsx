import * as React from 'react';
import { AppButton } from '../';
import texts from './texts';

class Logout extends React.Component<LogoutWithRouterProps> {
  private texts: Record<string, string>;
  constructor (props: LogoutWithRouterProps) {
    super(props);

    this.init();
  }

  private init (): void {
    this.texts = texts;

    this.logout = this.logout.bind(this);
  }

  public componentDidUpdate (prevProps: LogoutWithRouterProps): void {
    const { isAuthenticated } = this.props;
    const { isAuthenticated: prevIsAuthenticated } = prevProps;

    if (isAuthenticated !== prevIsAuthenticated && !isAuthenticated) {
      this.props.history.push(AppRoutes.publicRoute);
    }
  }

  private async logout (): Promise<void> {
    const { props } = this;

    try {
      props.activateWaitForServer();
      props.helperText && props.removeHelper();

      await props.logout();
    } catch {
      props.deactivateWaitForServer();
      props.addHelper({ helperText: this.texts.error });
    }
  }

  public render (): JSX.Element {
    return (
      <AppButton
        buttonProps={{
          onClick: this.logout,
          variant: 'text',
          disabled: this.props.waitForServer,
        }}
      >
        {this.texts.button}
      </AppButton>
    );
  }
}

export { Logout };
