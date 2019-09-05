type ButtonProps = import('@material-ui/core/Button').ButtonProps

declare const enum  AppButtonVariant {
  'transparent' = 'transparent',
}

declare interface AppButtonProps extends WithStyles {
  autoFocus?: boolean;
  buttonProps?: ButtonProps;
  variant?: AppButtonVariant;
}