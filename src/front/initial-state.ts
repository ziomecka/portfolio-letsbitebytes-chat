import { WINDOW_INITIAL_STATE } from '../common/';

export const INITIAL_STATE = (
  (window as AppWindow)[ WINDOW_INITIAL_STATE ] as unknown as AppState
);