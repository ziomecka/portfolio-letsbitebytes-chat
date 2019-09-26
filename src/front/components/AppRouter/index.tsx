import * as React from 'react';
import {
  CreateUser,
  HomeButton,
  Login,
  ProtectedRoute,
  Public,
} from '../../../common/';
import { Route } from 'react-router-dom';

const AppRouter: React.FunctionComponent<AppRouterProps> = () => {
  const homeButtonPaths = [
    AppRoutes.loginRoute,
    AppRoutes.createUserRoute,
  ];

  return (
    <React.Fragment>
      <Route exact path={AppRoutes.publicRoute} component={Public}/>
      <Route path={homeButtonPaths} render={HomeButton}/>
      <Route exact path={AppRoutes.loginRoute} component={Login}/>
      <Route exact path={AppRoutes.createUserRoute} component={CreateUser}/>
      <ProtectedRoute path={AppRoutes.protectedRoute}/>
    </React.Fragment>
  );
};

export { AppRouter };
