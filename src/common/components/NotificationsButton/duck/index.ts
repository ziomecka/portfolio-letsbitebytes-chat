import { setNotifications } from '../../../duck/actions';

export const getNotification = (): AppThunkAction<OpenDialogProps> => async (
  dispatch: AppThunkDispatch<SetNotificationsAction>,
  getState: GetState,
): Promise<OpenDialogProps> => {
  const state = getState();

  // can be other logic applied -depending on notification priority
  const { actual } = state.notifications;
  const notification = actual.shift();

  dispatch(setNotifications({
    notifications: {
      actual,
      history: [ notification, ...state.notifications.history ],
    },
  }));

  return Promise.resolve(notification);
};
