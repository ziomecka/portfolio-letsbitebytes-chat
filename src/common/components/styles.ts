import { SPACING_REGULAR } from '../theme/other-constants';
import { Theme } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/styles';

export const styles = createStyles(({
  palette,
  spacing,
}: Theme) => {
  const regularSpacing = spacing(SPACING_REGULAR);

  return {
    scrollBar: {
      overflowY: 'scroll',
      '&::-webkit-scrollbar': {
        backgroundColor: palette.background.paper,
        width: regularSpacing,
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: palette.grey[ 500 ],
      },
    },
  };
});
