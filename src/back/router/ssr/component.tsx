import * as React from 'react';
import {
  Common,
  Public,
} from '../../../common/';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

interface BackComponentProps {
  store: ReduxStore;
}

const BackComponent: React.FunctionComponent<BackComponentProps> = props => (
  <Provider store={props.store}>
    <StaticRouter>
      <Common>
        <Public />
      </Common>
    </StaticRouter>
  </Provider>
);

export { BackComponent };