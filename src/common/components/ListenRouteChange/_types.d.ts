declare interface MapStateToListenRouteChange {
  helperText: string;
}

declare interface MapDispatchToListenRouteChange extends
MapHelperToDispatch,
MapWaitForServerToDispatch {}

declare interface ListenRouteChangeProps extends
MapStateToListenRouteChange,
MapDispatchToListenRouteChange,
WithRouterProps {}
