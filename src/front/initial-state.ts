import {
  WINDOW_INITIAL_STATE,
  DEFAULT_INITIAL_STATE as defaultInitialState,
} from '../common/';

const initialState = (window as AppWindow)[ WINDOW_INITIAL_STATE ] as unknown as AppState;

export const INITIAL_STATE = initialState
  ? {
    ...initialState,
    user: { ...initialState.user },
    users: [...initialState.users],
  }
  : {
    ...defaultInitialState,
    user: { ...defaultInitialState.user },
    users: [...defaultInitialState.users],
  };

export { defaultInitialState };
