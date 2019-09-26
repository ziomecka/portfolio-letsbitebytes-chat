import { Theme, createStyles } from '@material-ui/core';

export const styles = createStyles(({
  palette,
  spacing,
  typography,
}: Theme) => ({
  menu: {
    '& button': {
      color: palette.primary.contrastText,
      margin: 0,
      padding: 0,
      marginLeft: spacing(),
      fontWeight: typography.fontWeightBold,
      width: 'auto',
    },
  },
}));
