declare const enum CommonActionTypes {
  changeActiveConversation = '@APP/Common/change active conversation',
}

declare interface ChangeConversationAction extends ReduxAction {
  activeConversation: string;
}

declare type CommonActions = ChangeConversationAction;

declare interface CommonState {
  activeConversation: string;
}