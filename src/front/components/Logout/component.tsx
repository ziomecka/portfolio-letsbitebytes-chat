import * as React from 'react';
import { AppRoutes } from '../../../common/';
import { Button } from '@material-ui/core/';

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
      <Button
        onClick={this.props.logout}
      >
        {this.submitButtonText}
      </Button>
    );
  }
}

export { Logout };
