import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { BackComponent } from './component';
import { ServerStyleSheets } from '@material-ui/styles';

export const sheets = new ServerStyleSheets();

export const getAppMarkup = (store: ReduxStore): string => (
  ReactDOMServer.renderToString(sheets.collect(<BackComponent store={store}/>))
);