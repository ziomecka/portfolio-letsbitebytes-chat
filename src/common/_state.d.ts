declare interface AppState {
  user: UserState;
  conversations: SocketState;
  activeConversation: string;
  connectionState: ConnectionState;
  contacts: ContactsState;
  dialog: DialogState;
  notifications: NotificationsState;
  waitForServer: boolean;
  helper: HelperState;
}

declare interface PartialAppState {
  user?: Partial<UserState>;
  conversations?: SocketState;
  activeConversation?: string;
  connectionState?: ConnectionState;
  contacts?: ContactsState;
  dialog?: Partial<DialogState>;
  notifications?: NotificationsState;
  waitForServer?: boolean;
  helper?: Partial<HelperState>;
}

declare interface AsyncInitialAppState {}

declare type AppWindow = Window & {
  __INITIAL_STATE__: string;
}

declare type AppAction = |
  LoginActions |
  CommonActions |
  DialogActions |
  ContactsActions;
