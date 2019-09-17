import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  AppRouter,
  RouterButton,
} from './components/';
import {
  Common,
  HTML_ROOT_ID,
} from '../common/';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PublisherProvider } from 'publisher-subscriber-react-hoc';
import { ssrClean } from './ssr-clean';
import { store } from './store';

require('./css/reset.sass');

interface FrontComponentProps {
  store: ReduxStore,
}

const HOME_LABEL = 'Home';

export const FrontComponent: React.FunctionComponent<FrontComponentProps> = ({ store }) => {
  const homeLabel = HOME_LABEL;

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
              <RouterButton
                to={ServerRoutes.publicRoute}
                variant={AppButtonVariant.transparent}
              >
                {homeLabel}
              </RouterButton>
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
