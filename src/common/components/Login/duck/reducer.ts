import { defaultInitialState } from '../../../initial-state';
import { loginInitialState } from './initial-state';
import update from 'immutability-helper';

export const loginReducer: ReduxReducer<UserState, LoginActions | LogoutActions> =
  (state = update({} as UserState, { $set: loginInitialState }), action) => {
    const { type, ...actionPayload } = action;

    switch (type) {
      case (LoginActionTypes.loginSuccess): {
        return {
          ...update(state, {
            $merge: actionPayload,
          }),
          isAuthenticated: true,
        };
      }

      case (LogoutActionTypes.logoutSuccess): {
        return update({} as UserState, { $set: defaultInitialState.user });
      }

      default: {
        return update({} as UserState, { $set: state });
      };
    }
  };

