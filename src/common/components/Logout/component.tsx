import * as React from 'react';
import { AppButton } from '../';

const BUTTON_TEXT = 'Logout';

class Logout extends React.Component<LogoutWithRouterProps> {
  private buttonText: string;
  constructor (props: LogoutWithRouterProps) {
    super(props);
    this.init();
  }

  private init (): void {
    this.buttonText = BUTTON_TEXT;

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
    const result = await this.props.logout();

    if (!result) {
      // todo
    }
  }

  public render (): JSX.Element {
    return (
      <AppButton
        buttonProps={{
          onClick: this.logout,
          variant: 'text',
        }}
      >
        {this.buttonText}
      </AppButton>
    );
  }
}

export { Logout };
