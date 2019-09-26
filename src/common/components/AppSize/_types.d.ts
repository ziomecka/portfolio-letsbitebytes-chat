declare const enum  AppSize {
  full = 'full',
  compact = 'compact',
}

declare interface WithAppSize {
  appSize?: AppSize;
}


declare interface AppSizeProviderProps {}
declare interface AppSizeProviderState {
  appSize: AppSize;
}