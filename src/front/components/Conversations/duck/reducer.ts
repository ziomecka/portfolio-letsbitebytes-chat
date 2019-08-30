import { Reducer } from 'redux';
import { conversationsInitialState } from './initial-state';

export const conversationsReducer: Reducer<ConversationsState> = (state = conversationsInitialState) => {
  return { ...state };
}