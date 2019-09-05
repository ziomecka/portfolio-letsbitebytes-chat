declare type ReduxAction = import('redux').Action;
declare type ExpressApplication = import('express').Application;
declare type ReduxStore = import('redux').Store;
declare type WithStyles = import('@material-ui/core/styles').WithStyles;

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
