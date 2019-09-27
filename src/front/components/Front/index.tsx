import * as React from 'react';
import { AppRouter } from '../';
import { BrowserRouter } from 'react-router-dom';
import { Common } from '../../../common/';

require('./css/index.sass');

interface FrontProps {
  store: ReduxStore,
}

export const Front: React.FunctionComponent<FrontProps> = ({ store }) => {
  return (
    <Common store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Common>
  );
};
