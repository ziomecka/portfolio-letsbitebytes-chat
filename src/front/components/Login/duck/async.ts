import { loginActionSuccess } from './actions';
import { setActiveConversation } from '../../../duck/async';

export const login = (props: LoginActionProps): AppThunkAction<boolean> => (async (
  dispatch: AppThunkDispatch<LoginActions>,
  getState: GetState,
  { api }: { api: Api }
): Promise<boolean> => {
  try {
    const { result, data } = await api.request(ServerRoutes.loginRoute, { queryParams: props });

    if (result) {
      dispatch(setActiveConversation(data.role));
      dispatch(loginActionSuccess({ ...props, ...data }));
    }

    return Promise.resolve(result);
  } catch {
    return Promise.reject(false);
  }
});
