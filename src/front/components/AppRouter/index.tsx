import * as React from 'react';
import {
  AppRoutes,
  Public,
} from '../../../common/';
import {
  CreateUser,
  Login,
  ProtectedRoute,
} from '../';
import { Route } from 'react-router-dom';
import { withPublisher } from 'publisher-subscriber-react-hoc';

const confirmReload = process.env.CLIENT_CONFIRM_RELOAD === 'true';

class AppRouter extends React.PureComponent<AppRouterProps> {
  private unsubscribe?: () => void;
  constructor (props: AppRouterProps) {
    super(props);
    this.init();
  }

  private init (): void {
    this.doNotRefresh = this.doNotRefresh.bind(this);

    this.unsubscribe = confirmReload
      ? this.props.subscribe('beforeunload', this.doNotRefresh)
      : undefined;
  }

  public componentWillUnmount (): void {
    this.unsubscribe && this.unsubscribe();
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
        <Route exact path={AppRoutes.createUserRoute} component={CreateUser}/>
        <ProtectedRoute path={AppRoutes.protectedRoute}/>
      </React.Fragment>
    );
  }
}

const WrappedAppRouter = withPublisher(AppRouter);

export { WrappedAppRouter as AppRouter };
