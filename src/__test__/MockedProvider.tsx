import * as React from 'react';
import {
  Store,
  createStore,
} from 'redux';
import { Provider } from 'react-redux';

const reducer = (): object => ({});
const defaultStore = createStore(reducer);

export const MockedProvider: React.FunctionComponent<{ store?: Store }> = ({
  children,
  store = defaultStore,
}) => (
  <Provider store={store}>
    {children}
  </Provider>
);
