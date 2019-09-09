import {
  logoutActionFailure,
  logoutActionSuccess,
} from './actions';

export const logout = (): AppThunkAction<LogoutActions> => (
  async (
    dispatch: AppThunkDispatch<LogoutActions>, getState: GetState, { api }: { api: Api }
  ): Promise<LogoutActions> => {
    try {
      const { result } = await api.request(ServerRoutes.logoutRoute);

      return result
        ? dispatch(logoutActionSuccess())
        : dispatch(logoutActionFailure());
    } catch {
      return dispatch(logoutActionFailure());
    }
  }
);
