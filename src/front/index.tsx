import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  HTML_ROOT_ID,
  store,
} from '../common';
import { Front } from './components';

ReactDOM.hydrate(
  <Front store={store} />,
  document.getElementById(HTML_ROOT_ID)
);

export { api } from './api';
