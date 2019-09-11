import { buildInitialStore } from './initial-store';
import { createStore } from 'redux';

const reducer = (): AppState => buildInitialStore();

export const store = createStore(reducer);
