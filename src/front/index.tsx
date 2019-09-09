import './css/reset.sass';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import {
  Common,
  HTML_ROOT_ID,
} from '../common/';
import {
  AppRouter,
} from './components';
import { Provider } from 'react-redux';
import { PublisherProvider } from 'publisher-subscriber-react-hoc';
import { ssrClean } from './ssr-clean';
import { store } from './store';

interface FrontComponentProps {
  store: ReduxStore,
}

export const FrontComponent: React.FunctionComponent<FrontComponentProps> = ({ store }) => (
  <Provider {...{ store }}>
    <BrowserRouter>
      <Common>
        {
          // @ts-ignore
          <PublisherProvider
            {...{
              emitter: window,
              addListenerMethodName: 'addEventListener',
              removeListenerMethodName: 'removeEventListener',
            }}
          >
            <AppRouter />
          </PublisherProvider>
        }
      </Common>
    </BrowserRouter>
  </Provider>
);

ReactDOM.hydrate(
  <FrontComponent store={store} />,
  document.getElementById(HTML_ROOT_ID)
);

ssrClean();
