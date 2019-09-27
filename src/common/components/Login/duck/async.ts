import {
  addNotification,
  deactivateWaitForServer,
  setUsers,
} from '../../../duck';
import { loginActionSuccess } from './actions';
import { setConversationsAction } from '../../Socket/';

export const login = ({ login, password }: LoginActionProps): AppThunkAction<boolean> => (async (
  dispatch: AppThunkDispatch<LoginActions>,
  getState: GetState,
  { api }: { api: Api }
): Promise<boolean> => {
  try {
    const {
      result,
      data: { users, role, conversations, logout },
    }: {
      result: boolean,
      data?: ApiLoginResponse,
    } = await api.request(
      ServerRoutes.loginRoute, { queryParams: { login, password } }
    ) as ApiResponse;

    dispatch(deactivateWaitForServer());

    if (result) {
      users && dispatch(setUsers({ users }));
      conversations && dispatch(setConversationsAction({ conversations }));
      dispatch(loginActionSuccess({ login, password, role }));

      if (logout) {
        dispatch(addNotification({
          title: [['You are already logged in']],
          content: [['You will be logged out from the other session']],
        }));
      }
    }

    return Promise.resolve(result);
  } catch {
    return Promise.reject(false);
  }
});