import { initialState } from '../initial-state';

const {
  conversations,
  user,
  contacts,
  dialog,
  helper,
  ...other
} = initialState;

export const commonInitialState = other;
