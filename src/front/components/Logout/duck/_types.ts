declare type LogoutActionSuccess = Action;

declare type LogoutActionFailure = Action;

declare type LogoutActionProps = Partial<UserState>;

declare const enum LogoutActionTypes {
  logoutSuccess = '@APP/Logout/logout success',
  logoutFailure = '@APP/Logout/logout failure',
}

declare type LogoutActions = LogoutActionSuccess | LogoutActionFailure;