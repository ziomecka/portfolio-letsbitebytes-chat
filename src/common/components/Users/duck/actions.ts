export const setUsers: ReduxActionCreator<SetUsersAction> =
  ({ users, loggedUser }: SetUsersActionProps) => ({
    type: UsersActionTypes.setUsers,
    users,
    loggedUser,
  });

export const addUser: ReduxActionCreator<AddUserAction> =
  ({ login }: AddUserActionProps) => ({
    type: UsersActionTypes.addUser,
    login,
  });
