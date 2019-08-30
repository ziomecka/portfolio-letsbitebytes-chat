import { ActionCreator } from "redux";

export const changeActiveConversation: ActionCreator<ChangeConversationAction> = (props: ChangeConversationActionProps) => ({
  type: CommonActionTypes.changeActiveConversation,
  ...props,
});