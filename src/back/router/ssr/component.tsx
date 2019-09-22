import * as React from 'react';
import {
  Common,
  Public,
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
    </StaticRouter>
  </Common>
);

export { Back };
