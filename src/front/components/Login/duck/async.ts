import {
  loginActionFailure,
  loginActionSuccess,
} from './actions';
import { setActiveConversation } from '../../../duck/async';

export const login = (props: LoginActionProps): AppThunkAction<LoginActions> => (
  async (dispatch: AppThunkDispatch<LoginActions>, getState: GetState, { api }: { api: Api }): Promise<LoginActions> => {
    try {
      const { result, data } = await api.request(ServerRoutes.loginRoute, { queryParams: props });

      if (result) dispatch(setActiveConversation(data.role));

      return result
        ? dispatch(loginActionSuccess({ ...props, ...data }))
        : dispatch(loginActionFailure());

    } catch {
      return dispatch(loginActionFailure());
    }
  }
);