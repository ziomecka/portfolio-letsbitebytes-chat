import { initialState } from '../initial-state';

const {
  conversations,
  user,
  ...other
} = initialState;

export const commonInitialState = other;
