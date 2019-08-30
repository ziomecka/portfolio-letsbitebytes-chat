import * as React from 'react';
import { Common } from '../../common/';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

interface BackComponentProps {
  store: import('redux').Store
}

const BackComponent: React.FunctionComponent<BackComponentProps> = props => (
  <Provider store={props.store}>
    <StaticRouter>
      <Common />
    </StaticRouter>
  </Provider>
);

export { BackComponent };