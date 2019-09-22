declare type LogoutActionSuccess = ReduxAction;

declare type LogoutActionProps = Partial<UserState>;

declare const enum LogoutActionTypes {
  logoutSuccess = '@APP/Logout/logout success',
}

declare type LogoutActions = LogoutActionSuccess;