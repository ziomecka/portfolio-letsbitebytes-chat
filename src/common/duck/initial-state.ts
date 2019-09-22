import { initialState } from '../initial-state';

export const commonInitialState = {
  activeConversation: initialState.activeConversation,
  connectionState: initialState.connectionState,
  users: [...initialState.users],
  notifications: {
    actual: [...initialState.notifications.actual],
    history: [...initialState.notifications.history],
  },
};
