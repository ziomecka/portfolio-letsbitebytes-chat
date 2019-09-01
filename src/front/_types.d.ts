type ReduxAction = import('redux').Action;
type ExpressApplication = import('express').Application;
type ReduxStore = import('redux').Store;

declare type GetState = () => AppState;

declare interface AppState {
  user: UserState;
  conversations: SocketState;
  activeConversation: string;
}

declare type AppWindow = Window & {
  __INITIAL_STATE__: string;
}

declare type AppAction = LoginActions | CommonActions;
