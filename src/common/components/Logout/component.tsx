import * as React from 'react';
import { AppButton } from '../';
import texts from './texts';

const BUTTON_TEXT = 'Logout';

class Logout extends React.Component<LogoutWithRouterProps, LogoutState> {
  private buttonText: string;
  private texts: Record<string, string>;
  constructor (props: LogoutWithRouterProps) {
    super(props);

    // todo - add to application general waitingForResponse state
    this.state = {
      waitingForResponse: false,
    };

    this.init();
  }

  private init (): void {
    this.buttonText = BUTTON_TEXT;
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
    try {
      this.setState({ waitingForResponse: true });

      await this.props.logout();
    } catch {
      this.setState({ waitingForResponse: false });

      // todo - add to application general error message in the bottom navigation
      this.props.addNotification({
        title: this.texts.titleError,
        content: this.texts.descriptionError,
      });
    }
  }

  public render (): JSX.Element {
    return (
      <AppButton
        buttonProps={{
          onClick: this.logout,
          variant: 'text',
          disabled: this.state.waitingForResponse,
        }}
      >
        {this.buttonText}
      </AppButton>
    );
  }
}

export { Logout };
