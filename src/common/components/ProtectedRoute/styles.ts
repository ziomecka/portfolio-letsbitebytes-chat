import { Theme, createStyles } from '@material-ui/core';
import { APP_NAV_HEIGHT } from '../../theme/other-constants';

export const styles = createStyles(({
  breakpoints,
  spacing,
}: Theme) => {
  return {
    box: {
      height: `calc(100% - ${ APP_NAV_HEIGHT + spacing() }px)`,
      [ breakpoints.up('md') ]: {
        padding: `0 ${ spacing() }px`,
      },
    },
  };
});
