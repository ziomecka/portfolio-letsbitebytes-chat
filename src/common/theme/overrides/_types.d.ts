type Theme = import('@material-ui/core').Theme;

declare interface AppTheme extends Theme {
  smallSpacing: number;
  regularSpacing: number;
  largeSpacing: number;
  appNavHeight: number;
}
