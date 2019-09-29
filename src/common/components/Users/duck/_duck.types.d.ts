declare const enum UsersActionTypes {
  setUsers = '@APP/Users/set users',
  addUser = '@APP/Users/add users',
}

declare type UsersState = string[];

declare interface SetUsersActionProps {
  users: string[];
}

declare interface AddUserActionProps {
  login: string;
}

declare interface SetUsersAction extends ReduxAction, SetUsersActionProps {}
declare interface AddUserAction extends ReduxAction, AddUserActionProps {}

declare type UsersActions = |
  SetUsersAction |
  AddUserAction;
