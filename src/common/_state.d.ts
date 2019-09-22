declare interface AppState {
  user: UserState;
  conversations: SocketState;
  activeConversation: string;
  connectionState: ConnectionState;
  users: string[];
  dialog: DialogState;
  message: MessageState;
}

declare interface PartialAppState {
  user?: Partial<UserState>;
  conversations?: SocketState;
  activeConversation?: string;
  connectionState?: ConnectionState;
  users?: string[];
  dialog?: Partial<DialogState>;
  message?: MessageState;
}

declare interface AsyncInitialAppState {}

declare type AppWindow = Window & {
  __INITIAL_STATE__: string;
}

declare type AppAction = |
  LoginActions |
  CommonActions |
  DialogActions;
