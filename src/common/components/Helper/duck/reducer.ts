import { defaultInitialState } from '../../../';
import { initialState } from './initial-state';
import update from 'immutability-helper';

const helperReducer: ReduxReducer<HelperState, HelperActions>
= (state = update({} as HelperState, { $set: initialState }), action) => {
  const { type, ...actionPayload } = action;

  switch (type) {
    case (HelperActionTypes.addHelper): {
      return update(state, {
        $merge: actionPayload as AddHelperProps,
      });
    }

    case (HelperActionTypes.removeHelper): {
      return update(state, {
        $set: update({} as HelperState, { $set: defaultInitialState.helper }),
      });
    }

    default: {
      return update({} as HelperState, { $set: state });
    }
  }
};

export { helperReducer };
