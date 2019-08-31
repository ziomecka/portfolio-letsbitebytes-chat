type Action = import('redux').Action;

declare const enum CommonActionTypes {
  changeActiveConversation = '@APP/Common/change active conversation',
}

declare interface ChangeConversationActionProps {
  activeConversation: string;
}

declare interface ChangeConversationAction extends ChangeConversationActionProps, Action {
}

declare type CommonActions = ChangeConversationAction;

declare interface CommonState {
  activeConversation: string;
};