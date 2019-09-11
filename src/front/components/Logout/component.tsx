import * as React from 'react';
import {
  AppButton,
  AppRoutes,
} from '../../../common/';

const BUTTON_TEXT = 'Logout';

class Logout extends React.Component<LogoutWithRouterProps> {
  private buttonText: string;
  constructor (props: LogoutWithRouterProps) {
    super(props);
    this.init();
  }

  private init (): void {
    this.buttonText = BUTTON_TEXT;
  }

  public componentDidUpdate (prevProps: LogoutWithRouterProps): void {
    const { isAuthenticated } = this.props;
    const { isAuthenticated: prevIsAuthenticated } = prevProps;

    if (isAuthenticated !== prevIsAuthenticated && !isAuthenticated) {
      this.props.history.push(AppRoutes.publicRoute);
    }
  }


  public render (): JSX.Element {
    return (
      <AppButton
        buttonProps={{
          onClick: this.props.logout,
        }}
        variant={ AppButtonVariant.transparent }
      >
        {this.buttonText}
      </AppButton>
    );
  }
}

export { Logout };
