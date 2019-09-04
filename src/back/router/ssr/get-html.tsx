import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import {
  HTML_ROOT_ID,
  SSR_STYLE_ROOT_ID,
  WINDOW_INITIAL_STATE
} from '../../../common/';
import { BUNDLE_URL } from '../../constants';
import { BackComponent } from './component';
import { ServerStyleSheets } from '@material-ui/styles';

export const sheets = new ServerStyleSheets();

export const getHtml = (store: ReduxStore): string => {
  const html = ReactDOMServer.renderToString(sheets.collect(<BackComponent store={store}/>));
  const css = sheets.toString();

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="author" content="Katarzyna Ziomek-Zdanowicz">
        <meta name="description" content="Chat application."/>
        <title>Let's chat</title>
        <style id="${ SSR_STYLE_ROOT_ID }">${ css }</style>
        <link href="/index.css" rel="stylesheet" type="text/css" />
        </head>
      <body>
        <div id="${ HTML_ROOT_ID }">${ html }</div>
        <script>window["${ WINDOW_INITIAL_STATE }"]=${ JSON.stringify(store.getState()) }</script>
        <script src="${ BUNDLE_URL }"></script>
      </body>
    </html>
  `;
};
