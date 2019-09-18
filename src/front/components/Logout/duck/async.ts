import { changeActiveConversation } from '../../../duck/actions';
import { clearConversationsAction } from '../../Socket/';
import { logoutActionSuccess } from './actions';

export const logout = (): AppThunkAction<boolean> => (
  async (
    dispatch: AppThunkDispatch<LogoutActions>, getState: GetState, { api }: { api: Api }
  ): Promise<boolean> => {
    try {
      const { result } = await api.request(
        ServerRoutes.logoutRoute, { queryParams: { login: getState().user.login } }
      );

      if (result) {
        dispatch(logoutActionSuccess());
        dispatch(clearConversationsAction());
        dispatch(changeActiveConversation());
      }

      return Promise.resolve(result);
    } catch {
      return Promise.reject(false);
    }
  }
);
