import { buildInitialState } from './state/';
import { createStore } from 'redux';

export const getStore = async (): Promise<ReduxStore> => {
  const initialState = await buildInitialState();

  const reducer = (): AppState => initialState;

  return createStore(reducer);
};
