import { initialState } from './initial-state';
import update from 'immutability-helper';

const usersReducer: ReduxReducer<UsersState, UsersActions>
= (state = update(null as UsersState, { $set: initialState }), action) => {
  const { type, ...actionPayload } = action;

  switch (type) {
    case (UsersActionTypes.setUsers): {
      const { users, loggedUser } = actionPayload as SetUsersAction;

      const newUsers = new Set(users);
      newUsers.delete(loggedUser);

      return update([], { $set: Array.from(newUsers) });
    }

    case (UsersActionTypes.addUser): {
      return update(state, { $push: [(actionPayload as AddUserAction).login] });
    }

    default: {
      return update(state, { $set: state });
    }
  }
};

export { usersReducer };
