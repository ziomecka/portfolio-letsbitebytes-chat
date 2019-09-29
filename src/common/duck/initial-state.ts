import { initialState } from '../initial-state';

const {
  conversations,
  user,
  contacts,
  dialog,
  ...other
} = initialState;

export const commonInitialState = other;
