declare type AppThunkAction<A, R = A > = import('redux-thunk').ThunkAction<Promise<R>, AppState, {api: Api}, A>;

declare type AppThunkDispatch<A> = import('redux-thunk').ThunkDispatch<AppState, {api: Api}, A>;

declare type GetState = () => AppState;