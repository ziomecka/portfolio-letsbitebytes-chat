import { Reducer } from 'react';
import { loginInitialState } from './initial-state';

const unAuthorize = (state: UserState): UserState => {
  const {
    isAuthenticated,
    login,
    password,
    role,
  } = loginInitialState;

  return {
    ...state,
    isAuthenticated,
    login,
    password,
    role,
  };
};

export const loginReducer: Reducer<UserState, LoginActions | LogoutActions> =
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

      case (LogoutActionTypes.logoutFailure): {
        return {
          ...state,
          isAuthenticated: true,
        };
      }

      case (LoginActionTypes.loginFailure): {
        return unAuthorize(state);
      }

      case (LogoutActionTypes.logoutSuccess): {
        return unAuthorize(state);
      }

      default: {
        return { ...state };
      };
    }
  };

