import {
  APP_NAV_HEIGHT,
  LARGE_SPACING,
  REGULAR_SPACING,
} from '../../theme/other-constants';
import { Theme, createStyles } from '@material-ui/core';

export const styles = createStyles(({
  breakpoints,
  spacing,
}: Theme) => {
  const padding = spacing(REGULAR_SPACING);
  const paddingTop = spacing(LARGE_SPACING);

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
