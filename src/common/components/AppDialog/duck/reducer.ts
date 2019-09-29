import { defaultInitialState } from '../../../';
import { initialState } from './initial-state';
import update from 'immutability-helper';

const dialogReducer: ReduxReducer<DialogState, DialogActions>
= (state = update({} as DialogState, { $set: initialState }), action) => {
  const { type, ...actionPayload } = action;

  switch (type) {
    case (DialogActionTypes.open): {
      return update(state,
        { $merge: { ...(actionPayload as OpenDialogAction), open: true } },
      );
    }

    case (DialogActionTypes.close): {
      return update(state,
        { $merge: { ...(defaultInitialState.dialog), open: false } },
      );
    }

    default: {
      return update({} as DialogState, { $set: state });
    }
  }
};

export { dialogReducer };
