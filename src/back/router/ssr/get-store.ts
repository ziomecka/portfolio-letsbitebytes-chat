import { buildInitialState } from './state/';
import { createStore } from 'redux';

export const getStore = async (state?: PartialSsrInitialState): Promise<ReduxStore> => {
  const initialState = await buildInitialState(state);

  const reducer = (): AppState => initialState;

  return createStore(reducer);
};
