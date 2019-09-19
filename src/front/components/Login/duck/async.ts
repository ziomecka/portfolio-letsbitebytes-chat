import { loginActionSuccess } from './actions';
import { setConversationsAction } from '../../Socket/';
import { setUsers } from '../../../duck/';

export const login = (props: LoginActionProps): AppThunkAction<boolean> => (async (
  dispatch: AppThunkDispatch<LoginActions>,
  getState: GetState,
  { api }: { api: Api }
): Promise<boolean> => {
  try {
    const {
      result,
      data: { users, role, conversations },
    }: {
      result: boolean,
      data?: ApiLoginData,
    } =
    await api.request(ServerRoutes.loginRoute, { queryParams: props }) as ApiResponse;

    if (result) {
      users && dispatch(setUsers({ users }));
      conversations && dispatch(setConversationsAction({ conversations }));
      dispatch(loginActionSuccess({ ...props, role }));
    }

    return Promise.resolve(result);
  } catch {
    return Promise.reject(false);
  }
});
