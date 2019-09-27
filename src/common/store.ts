import {
  applyMiddleware,
  createStore,
} from 'redux';
import { api } from './';
import { appReducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const store = createStore(
  appReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ api }))
  ),
);
