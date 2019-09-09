import { ActionCreator } from 'redux';

export const logoutActionSuccess: ActionCreator<LogoutActionSuccess> = () => ({
  type: LogoutActionTypes.logoutSuccess,
});

export const logoutActionFailure: ActionCreator<LogoutActionFailure> = () => ({
  type: LogoutActionTypes.logoutFailure,
});
