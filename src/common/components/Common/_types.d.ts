declare type PaperElevation = 0 | 1 | 2;

declare interface CommonProps extends WithStyles {
  elevation?: PaperElevation;
  store: ReduxStore;
}
