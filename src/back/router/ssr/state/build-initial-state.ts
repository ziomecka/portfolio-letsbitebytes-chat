import { IS_PRODUCTION } from '../../../constants';
import { buildDevelopmentUser } from './build-development-user';
import { initialState } from '../../../../common/';

export const buildInitialState =
async ({ notifications }: PartialSsrInitialState): Promise<AppState> => {
  // todo copy conversations
  return {
    ...initialState,
    conversations: {} as Conversations,
    connectionState: ConnectionState.unknown,
    user: IS_PRODUCTION
      ? { ...initialState.user }
      : {
        ...initialState.user,
        ...buildDevelopmentUser(),
      },
    users: [] as string[],
    dialog: { ...initialState.dialog },
    notifications: {
      history: [...notifications.history],
      actual: [...notifications.actual],
    },
  };
};
