import * as React from 'react';
import {
  Common,
  ListenRouteChange,
} from '../../../common/';
import { AppRouter } from '../';
import { BrowserRouter } from 'react-router-dom';

require('./css/index.sass');

interface FrontProps {
  store: ReduxStore,
}

export const Front: React.FunctionComponent<FrontProps> = ({ store }) => {
  return (
    <Common store={store}>
      <BrowserRouter>
        <AppRouter />
        <ListenRouteChange />
      </BrowserRouter>
    </Common>
  );
};
