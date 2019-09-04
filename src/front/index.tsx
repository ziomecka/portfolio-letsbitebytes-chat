import './css/reset.sass';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  AppRoutes,
  Common,
  HTML_ROOT_ID,
} from '../common/';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import {
  Login,
  ProtectedRoute,
} from './components';
import { Provider } from 'react-redux';
import { Public } from '../common/components/';
import { ssrClean } from './ssr-clean';
import { store } from './store';

interface FrontComponentProps {
  store: ReduxStore,
}

export const FrontComponent: React.FunctionComponent<FrontComponentProps> = ({ store }) => (
  <Provider {...{ store }}>
    <BrowserRouter>
      <Common>
        <Route exact path={AppRoutes.publicRoute} component={Public}/>
        <Route exact path={AppRoutes.loginRoute} component={Login}/>
        <ProtectedRoute path={AppRoutes.protectedRoute}/>
      </Common>
    </BrowserRouter>
  </Provider>
);

ReactDOM.hydrate(
  <FrontComponent store={store} />,
  document.getElementById(HTML_ROOT_ID)
);

ssrClean();