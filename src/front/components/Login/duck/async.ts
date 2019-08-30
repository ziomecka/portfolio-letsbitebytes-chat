import {
  loginActionFailure,
  loginActionSuccess,
} from './actions';

export const login = (props: LoginActionProps): AppThunkAction<LoginActions> => (
  async (dispatch: AppThunkDispatch<LoginActions>, getState: GetState, { api }: { api: Api }): Promise<LoginActions> => {
    try {
      const { result, data } = await api.request(ServerRoutes.loginRoute, { queryParams: props });

      return result
        ? dispatch(loginActionSuccess({ ...props, ...data }))
        : dispatch(loginActionFailure());
    } catch {
      return dispatch(loginActionFailure());
    }
  }
);