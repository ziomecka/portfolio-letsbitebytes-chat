import { Theme, createStyles } from '@material-ui/core';

export const styles = createStyles(({ palette }: Theme) => ({
  primaryContrast: {
    color: palette.primary.contrastText,
  },
}));
