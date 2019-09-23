declare interface AppFormProps {
  heading: string;
  formHelperProps?: {
    error?: boolean;
    errorMessage?: string;
    connectionError?: boolean;
  };
  onKeyDown?(event?: React.KeyboardEvent<HTMLElement>): void;
}
