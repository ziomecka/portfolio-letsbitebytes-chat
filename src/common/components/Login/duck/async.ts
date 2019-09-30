import {
  openDialog,
  setContacts,
  setConversationsAction,
} from '../../';
import { deactivateWaitForServer } from '../../../duck';
import { loginActionSuccess } from './actions';
import texts from './texts';

export const login = ({ login, password }: LoginActionProps): AppThunkAction<boolean> => (async (
  dispatch: AppThunkDispatch<LoginActions>,
  getState: GetState,
  { api }: { api: Api }
): Promise<boolean> => {
  try {
    const {
      result,
      data: { contacts, role, conversations, logout },
    }: {
      result: boolean,
      data?: ApiLoginResponse,
    } = await api.request(
      ServerRoutes.loginRoute, { queryParams: { login, password } }
    ) as ApiResponse;

    dispatch(deactivateWaitForServer());

    if (result) {
      contacts && dispatch(setContacts({ contacts, loggedUser: login }));
      conversations && dispatch(setConversationsAction({ conversations }));
      dispatch(loginActionSuccess({ login, password, role }));

      if (logout) {
        dispatch(openDialog({
          title: [[texts.loggedInTitle]],
          content: [[texts.loggedInContent]],
        }));
      }
    }

    return Promise.resolve(result);
  } catch {
    return Promise.reject(false);
  }
});
