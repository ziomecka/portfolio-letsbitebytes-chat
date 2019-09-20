import { usersManager } from '../../../';

export const getAsyncState = async (): Promise<AsyncInitialAppState> => {
  return await usersManager.buildAsyncState();
};
