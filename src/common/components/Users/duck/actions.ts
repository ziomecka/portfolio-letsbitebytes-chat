export const setUsers: ReduxActionCreator<SetUsersAction> =
  ({ users }: SetUsersActionProps) => ({
    type: UsersActionTypes.setUsers,
    users,
  });

export const addUser: ReduxActionCreator<AddUserAction> =
  ({ login }: AddUserActionProps) => ({
    type: UsersActionTypes.addUser,
    login,
  });
