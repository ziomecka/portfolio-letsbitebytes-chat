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
        return unAuthorize(state);
      }

      default: {
        return { ...state };
      };
    }
  };

