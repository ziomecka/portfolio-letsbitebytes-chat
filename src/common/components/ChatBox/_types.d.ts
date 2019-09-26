declare interface ChatBoxProps extends WithStyles {
  heading?: string;
  elevation?: PaperElevation;
  containedHeading?: boolean;
  boldHeading?: boolean;
  GridProps?: Partial<import('@material-ui/core/Grid').GridProps>;
  TypographyProps?: Partial<import('@material-ui/core/Typography').TypographyProps>;
}
