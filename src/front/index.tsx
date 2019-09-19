import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Common,
  HTML_ROOT_ID,
} from '../common/';
import { AppRouter } from './components/';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PublisherProvider } from 'publisher-subscriber-react-hoc';
import { ssrClean } from './ssr-clean';
import { store } from './store';

require('./css/reset.sass');

interface FrontComponentProps {
  store: ReduxStore,
}

export const FrontComponent: React.FunctionComponent<FrontComponentProps> = ({ store }) => {
  return (
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
};

ReactDOM.hydrate(
  <FrontComponent store={store} />,
  document.getElementById(HTML_ROOT_ID)
);

ssrClean();
