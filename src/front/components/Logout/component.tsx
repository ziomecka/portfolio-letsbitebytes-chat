import * as React from 'react';
import {
  AppButton,
  AppRoutes
} from '../../../common/';

class Logout extends React.Component<LogoutProps> {
  public componentDidUpdate (prevProps: LogoutProps): void {
    const { isAuthenticated } = this.props;
    const { isAuthenticated: prevIsAuthenticated } = prevProps;

    if ( isAuthenticated !== prevIsAuthenticated && !isAuthenticated) {
      // @ts-ignore
      this.props.history.push(AppRoutes.public);
    }
  }

  private submitButtonText = 'Logout';

  public render (): JSX.Element {
    return (
      <AppButton
        buttonProps={{
          onClick: this.props.logout,
        }}
        variant={ AppButtonVariant.transparent }
      >
        {this.submitButtonText}
      </AppButton>
    );
  }
}

export { Logout };
