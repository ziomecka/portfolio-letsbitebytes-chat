import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { BackComponent } from './component';

export const getAppMarkup = (store: ReduxStore): string => (
  ReactDOMServer.renderToString(<BackComponent store={store}/>)
);