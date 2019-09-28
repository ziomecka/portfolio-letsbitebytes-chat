import * as React from 'react';
import {
  Common,
  ProtectedRoute,
  Public,
  ListenRouteChange,
} from '../../../common/';
import {
  Route,
  StaticRouter,
} from 'react-router-dom';

interface BackProps {
  store: ReduxStore;
}

const Back: React.FunctionComponent<BackProps> = (
  { store }: BackProps
) => (
  <Common store={store}>
    <StaticRouter>
      <Route exact path={AppRoutes.publicRoute} component={Public}/>
      <Route exact path = {AppRoutes.loginRoute} />
      <Route exact path = {AppRoutes.createUserRoute} />
      <ProtectedRoute path = {AppRoutes.protectedRoute} />
      <ListenRouteChange />
    </StaticRouter>
  </Common>
);

export { Back };
