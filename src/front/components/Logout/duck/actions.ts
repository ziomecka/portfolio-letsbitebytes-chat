export const logoutActionSuccess: ReduxActionCreator<LogoutActionSuccess> = () => ({
  type: LogoutActionTypes.logoutSuccess,
});

export const logoutActionFailure: ReduxActionCreator<LogoutActionFailure> = () => ({
  type: LogoutActionTypes.logoutFailure,
});
