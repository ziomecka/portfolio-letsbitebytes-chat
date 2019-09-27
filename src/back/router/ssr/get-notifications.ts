import notifications from './notifications';

export const getNotifications = async (userId?: string): Promise<NotificationsState> => {
  if (userId) {
    return Promise.resolve({
      history: [],
      actual: [],
    });
  }

  return Promise.resolve({
    history: [],
    actual: [notifications.welcome],
  });
};
