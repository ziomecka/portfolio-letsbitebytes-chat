declare interface MapStateToAppNav {
  login: string;
}

declare interface AppNavProps extends MapStateToAppNav, WithStyles {
  appTitle?: string;
}
