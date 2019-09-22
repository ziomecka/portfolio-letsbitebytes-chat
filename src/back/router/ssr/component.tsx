import * as React from 'react';
import {
  Common,
  Public,
} from '../../../common/';
import {
  Route,
  StaticRouter,
} from 'react-router-dom';

interface BackComponentProps {
  store: ReduxStore;
}

const BackComponent: React.FunctionComponent<BackComponentProps> = (
  { store }: BackComponentProps
) => (
  <Common store={store}>
    <StaticRouter>
      <Route exact path={AppRoutes.publicRoute} component={Public}/>
    </StaticRouter>
  </Common>
);

export { BackComponent };
