declare type ReduxAction = import('redux').Action;
declare type ReduxActionCreator<A> = import('redux').ActionCreator<A>;
declare type ReduxDispatch = import('redux').Dispatch;
declare type ReduxReducer<S, A> = import('redux').Reducer<S, A>;
declare type ReduxStore = import('redux').Store;

declare type WithStyles = import('@material-ui/core/styles').WithStyles;
declare type WithPublisherProps = import('publisher-subscriber-react-hoc').WithPublisherProps;
declare type EventCallback<E> = import('publisher-subscriber-react-hoc').EventCallback<E>;
