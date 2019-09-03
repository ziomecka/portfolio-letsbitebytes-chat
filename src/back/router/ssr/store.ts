import { createStore } from 'redux';
import { initialStore } from './initial-store';

const reducer = (): AppState => initialStore;

export const store = createStore( reducer );
