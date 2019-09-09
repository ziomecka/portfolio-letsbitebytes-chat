import { changeActiveConversation } from './actions';
import { findPartner } from '../utils/find-partner';

export const setActiveConversation = (role: UserRole): AppThunkAction<CommonActions> => (
  async (dispatch: AppThunkDispatch<CommonActions>): Promise<ChangeConversationAction> => {
    const partner = findPartner(role);
    return dispatch(changeActiveConversation(partner));
  }
);
