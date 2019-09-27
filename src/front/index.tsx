import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Front } from './components/';
import { HTML_ROOT_ID } from '../common';
import { ssrClean } from './ssr-clean';
import { store } from '../common/store';

ReactDOM.hydrate(
  <Front store={store} />,
  document.getElementById(HTML_ROOT_ID)
);

// clean ssr after hydrating so the colors do not flicker
ssrClean();
