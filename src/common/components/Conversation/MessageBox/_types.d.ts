type TextField = Partial<import('@material-ui/core/TextField').TextFieldProps> & {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void;
  value: string;
}

declare interface MessageBoxProps extends WithStyles {
  TextFieldProps: TextField;
  ButtonProps: Partial<ButtonProps> & {
    onClick(e: React.MouseEvent<HTMLButtonElement>): void;
  }
}
