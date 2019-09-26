declare interface AppFormProps {
  heading?: string;
  homeButton?: boolean;
  formHelperProps?: {
    error?: boolean;
    errorMessage?: string;
    connectionError?: boolean;
  };
  onKeyDown?(event?: React.KeyboardEvent<HTMLElement>): void;
}
