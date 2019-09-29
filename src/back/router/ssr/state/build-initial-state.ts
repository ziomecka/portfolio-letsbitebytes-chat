import { IS_PRODUCTION } from '../../../constants';
import { buildDevelopmentUser } from './build-development-user';
import { initialState } from '../../../../common/';
import update from 'immutability-helper';

export const buildInitialState =
async ({ notifications }: PartialSsrInitialState): Promise<AppState> => {
  const initialUser = update({} as UserState, { $set: initialState.user });
  return {
    ...initialState,
    connectionState: ConnectionState.unknown,
    user: IS_PRODUCTION
      ? initialUser
      : {
        ...initialUser,
        ...buildDevelopmentUser(),
      },
    contacts: [] as ContactsState,
    dialog: update({} as DialogState, { $set: initialState.dialog }),
    notifications: update({} as NotificationsState, { $set: notifications }),
    helper: update({} as HelperState, { $set: initialState.helper }),
  };
};
