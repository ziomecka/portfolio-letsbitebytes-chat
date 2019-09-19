type ButtonProps = import('@material-ui/core/Button').ButtonProps

declare const enum  AppButtonVariant {
  transparent = 'transparent',
  flex = 'flex',
}

declare interface AppButtonProps extends WithStyles {
  autoFocus?: boolean;
  buttonProps?: ButtonProps;
  variant?: AppButtonVariant;
}