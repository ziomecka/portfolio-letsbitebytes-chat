declare interface AppFormProps {
  heading: string;
  formHelperProps?: {
    error?: boolean;
    errorMessage?: string;
    connectionError?: boolean;
  };
}
