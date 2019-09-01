type Action = import('redux').Action;

declare const enum CommonActionTypes {
  changeActiveConversation = '@APP/Common/change active conversation',
}

declare interface ChangeConversationAction extends Action {
  activeConversation: string;
};

declare type CommonActions = ChangeConversationAction;

declare interface CommonState {
  activeConversation: string;
};