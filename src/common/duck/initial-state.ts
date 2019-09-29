import { initialState } from '../initial-state';

const {
  conversations,
  user,
  users,
  ...other
} = initialState;

export const commonInitialState = other;
