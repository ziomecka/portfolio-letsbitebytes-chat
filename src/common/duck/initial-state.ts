import { initialState } from '../initial-state';

const {
  conversations,
  user,
  contacts,
  ...other
} = initialState;

export const commonInitialState = other;
