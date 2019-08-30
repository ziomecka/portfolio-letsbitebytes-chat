import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { BackComponent } from './component';

export const getAppMarkup = (store: import('redux').Store): string => (
  ReactDOMServer.renderToString(<BackComponent store={store}/>)
);