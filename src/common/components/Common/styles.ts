import {
  APP_MAX_WIDTH,
  APP_MIN_HEIGHT,
  APP_NAV_HEIGHT,
  LARGE_SPACING,
} from '../../theme/other-constants';
import {
  Theme,
  createStyles,
} from '@material-ui/core/styles';

export const styles = createStyles(({
  breakpoints,
  spacing,
}: Theme) => {
  const largeSpacing = spacing(LARGE_SPACING);

  return {
    rootBox: {
      position: 'relative',
      margin: '0 auto',
      padding: largeSpacing,
      paddingTop: `${ APP_NAV_HEIGHT * 1.5 }px`,
      maxWidth: APP_MAX_WIDTH,
      width: '100%',
      maxHeight: '100vh',
      height: '100vh',
      [ breakpoints.up('md') ]: {
        height: APP_MIN_HEIGHT,
      },
      overflow: 'hidden',
    },
  };
});
