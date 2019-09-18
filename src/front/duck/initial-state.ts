import { INITIAL_STATE } from '../initial-state';

export const commonInitialState = {
  activeConversation: INITIAL_STATE.activeConversation,
  connectionState: INITIAL_STATE.connectionState,
  users: [...INITIAL_STATE.users],
};
