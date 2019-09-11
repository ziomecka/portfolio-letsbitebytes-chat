import { defaultInitialState } from '../../../initial-state';
import { loginInitialState } from './initial-state';

export const loginReducer: ReduxReducer<UserState, LoginActions | LogoutActions> =
  (state = loginInitialState, action) => {
    const { type, ...actionPayload } = action;

    switch (type) {
      case (LoginActionTypes.loginSuccess): {
        return {
          ...state,
          ...actionPayload,
          isAuthenticated: true,
        };
      }

      case (LogoutActionTypes.logoutSuccess): {
        return { ...defaultInitialState.user };
      }

      default: {
        return { ...state };
      };
    }
  };

