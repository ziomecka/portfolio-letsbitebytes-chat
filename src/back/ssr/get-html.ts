import {
  HTML_ROOT_ID,
  WINDOW_INITIAL_STATE
} from '../../common/';
import { sheets } from './get-app-markup';

const BUNDLE_URL = '/index.js';

export const getHtml = (appMarkup: string, store: ReduxStore): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <style>${ sheets.toString() }</style>
      </head>
      <body>
        <div id="${ HTML_ROOT_ID }">${ appMarkup }</div>
        <script>window["${ WINDOW_INITIAL_STATE }"]=${ JSON.stringify(store.getState()) }</script>
        <script src="${ BUNDLE_URL }"></script>
      </body>
    </html>
  `;
};
