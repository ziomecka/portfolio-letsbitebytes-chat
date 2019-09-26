declare interface AppFormProps {
  heading?: string;
  homeButton?: boolean;
  FormHelperProps?: {
    error?: boolean;
    errorMessage?: string;
    connectionError?: boolean;
  };
  GridProps?:{
    alignItems?: import('@material-ui/core/Grid').GridItemsAlignment;
    justify?: import('@material-ui/core/Grid').GridJustification;
  };
  onKeyDown?(event?: React.KeyboardEvent<HTMLElement>): void;
}
