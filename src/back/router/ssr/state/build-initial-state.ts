import { NODE_ENV } from '../../../constants';
import { buildDevelopmentUser } from './build-development-user';
import {
  DEFAULT_INITIAL_STATE as defaultInitialState,
} from '../../../../common/';

export const buildInitialState =
async (): Promise<AppState> => {
  let user = {
    ...defaultInitialState.user,
  };

  if (NODE_ENV !== 'production') {
    user = {
      ...user,
      ...buildDevelopmentUser(),
    };
  }

  // todo copy conversations
  return {
    ...defaultInitialState,
    conversations: {} as Conversations,
    connectionState: ConnectionState.unknown,
    user,
    users: [] as string[],
  };
};
