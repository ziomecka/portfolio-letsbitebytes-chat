import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Front } from './components';
import { HTML_ROOT_ID } from '../common/';
import { store } from './store';

ReactDOM.hydrate(
  <Front store={store} />,
  document.getElementById(HTML_ROOT_ID)
);
