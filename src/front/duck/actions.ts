export const changeActiveConversation: ReduxActionCreator<ChangeConversationAction> =
  (activeConversation: string) => ({
    type: CommonActionTypes.changeActiveConversation,
    activeConversation,
  });
