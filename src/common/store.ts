import {
  applyMiddleware,
  createStore,
} from 'redux';
import { api } from '../front/api/';
import { appReducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const store = !process || (process.env.NODE_ENV === 'production')
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
