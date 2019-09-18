import { user } from '../../../user/';

export const getAsyncState = async (): Promise<AsyncInitialAppState> => {
  return await user.buildAsyncState();
};
