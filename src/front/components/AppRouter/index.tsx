import * as React from 'react';
import {
  AppRoutes,
  Public,
} from '../../../common/';
import {
  Login,
  ProtectedRoute,
} from '../';
import { Route } from 'react-router-dom';
import { withPublisher } from 'publisher-subscriber-react-hoc';

class AppRouter extends React.PureComponent<AppRouterProps> {
  private unsubscribe: () => void;
  constructor (props: AppRouterProps) {
    super(props);
    this.doNotRefresh = this.doNotRefresh.bind(this);
    this.unsubscribe = props.subscribe('beforeunload', this.doNotRefresh);
  }

  public componentWillUnmount (): void {
    this.unsubscribe();
  }

  private doNotRefresh (event: Event): boolean {
    event.returnValue = false;
    return false;
  }

  public render (): JSX.Element {
    return (
      <React.Fragment>
        <Route exact path={AppRoutes.publicRoute} component={Public}/>
        <Route exact path={AppRoutes.loginRoute} component={Login}/>
        <ProtectedRoute path={AppRoutes.protectedRoute}/>
      </React.Fragment>
    );
  }
}

const WrappedAppRouter = withPublisher(AppRouter);

export { WrappedAppRouter as AppRouter };