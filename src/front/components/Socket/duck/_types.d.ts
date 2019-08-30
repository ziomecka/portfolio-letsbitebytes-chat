declare interface EmitMessageActionProps {
  message: string;
}

declare interface EmitMessageAction extends EmitMessageActionProps {
  type: string;
}

declare interface ReceiveMessageProps {
  message: string;
  from: string;
}

declare interface ReceiveMessageAction extends ReceiveMessageProps {
  type: string;
}

declare interface InitiateSocketAction {
  type: string;
}
