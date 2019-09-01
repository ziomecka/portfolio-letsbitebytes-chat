import { ActionCreator } from "redux";

export const changeActiveConversation: ActionCreator<ChangeConversationAction> = (activeConversation: string) => ({
  type: CommonActionTypes.changeActiveConversation,
  activeConversation,
});