import {
  applyMiddleware,
  createStore,
} from 'redux';
import { api } from '../front/api/';
import { appReducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { isProduction } from './constants';
import thunk from 'redux-thunk';

export const store = isProduction
  ? createStore(
    appReducer,
    applyMiddleware(thunk.withExtraArgument({ api }))
  )
  : createStore(
    appReducer,
    composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument({ api }))
    ),
  );
