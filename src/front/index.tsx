import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  HTML_ROOT_ID,
  store,
} from '../common';
import { Front } from './components/';
import { ssrClean } from './ssr-clean';

ReactDOM.hydrate(
  <Front store={store} />,
  document.getElementById(HTML_ROOT_ID)
);

// clean ssr after hydrating so the colors do not flicker
ssrClean();
