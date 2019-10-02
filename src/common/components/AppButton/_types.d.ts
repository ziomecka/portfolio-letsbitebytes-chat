declare interface AppButtonProps extends WithStyles {
  autoFocus?: boolean;
  buttonProps: Partial<import('@material-ui/core/Button').ButtonProps> & {
    onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  };
}