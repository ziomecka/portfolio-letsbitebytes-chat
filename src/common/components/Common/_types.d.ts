
declare type PaperElevation = 0 | 1 | 2;

declare interface MapStateToCommon {
  login: string;
}

declare interface CommonProps extends MapStateToCommon, WithStyles {
  appTitle?: string;
  elevation?: PaperElevation;
  store: ReduxStore;
}
