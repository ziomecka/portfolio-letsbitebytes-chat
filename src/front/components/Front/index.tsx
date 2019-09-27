import * as React from 'react';
import { AppRouter } from '../';
import { BrowserRouter } from 'react-router-dom';
import { Common } from '../../../common/';
import { ssrClean } from './ssr-clean';

require('./css/reset.sass');

interface FrontProps {
  store: ReduxStore,
}

export const Front: React.FunctionComponent<FrontProps> = ({ store }) => {
  ssrClean();
  return (
    <Common store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Common>
  );
};
