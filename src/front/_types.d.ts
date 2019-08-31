// TODO can be removed
declare type GetState = () => any;

declare interface AppState {
  user: UserState;
  conversations: SocketState;
  activeConversation: string;
}

declare type AppWindow = Window & {
  __INITIAL_STATE__: string;
};

declare type AppAction = LoginActions | CommonActions;
