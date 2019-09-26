import {
  APP_NAV_HEIGHT,
  SPACING_LARGE,
  SPACING_REGULAR,
} from '../../theme/other-constants';
import { Theme, createStyles } from '@material-ui/core';

export const styles = createStyles(({
  breakpoints,
  spacing,
}: Theme) => {
  const padding = spacing(SPACING_REGULAR);
  const paddingTop = spacing(SPACING_LARGE);

  return {
    box: {
      height: `calc(100% - ${ APP_NAV_HEIGHT }px)`,
      paddingTop,
      [ breakpoints.up('md') ]: {
        padding: `0 ${ padding }px`,
        paddingTop,
      },
    },
  };
});
