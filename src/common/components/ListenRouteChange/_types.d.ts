declare interface MapDispatchToListenRouteChange extends MapWaitForServerToDispatch {}

declare interface ListenRouteChangeProps extends
MapDispatchToListenRouteChange,
WithRouterProps {}
