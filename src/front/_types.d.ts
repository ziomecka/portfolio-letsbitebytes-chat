declare type ReduxAction = import('redux').Action;
declare type ReduxActionCreator<A> = import('redux').ActionCreator<A>;
declare type ReduxReducer<S, A> = import('redux').Reducer<S, A>;
declare type ReduxStore = import('redux').Store;

declare type ExpressApplication = import('express').Application;

declare type WithStyles = import('@material-ui/core/styles').WithStyles;
declare type WithPublisherProps = import('publisher-subscriber-react-hoc').WithPublisherProps;
declare type EventCallback<E> = import('publisher-subscriber-react-hoc').EventCallback<E>;

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
