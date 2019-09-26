import {
  APP_MAX_WIDTH,
  APP_MIN_HEIGHT,
  APP_NAV_HEIGHT,
  SPACING_LARGE,
} from '../../theme/other-constants';
import {
  Theme,
  createStyles,
} from '@material-ui/core/styles';

export const styles = createStyles(({
  breakpoints,
  spacing,
  typography,
}: Theme) => {
  const largeSpacing = spacing(SPACING_LARGE);

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
    box: {
      // * 2 => h1.fontSize + h1 marginBottom (overrides MuiTypography, root, h1, marginBottom)
      height: `calc(100% - ${ typography.h1.fontSize } * 2)`,
      width: '100%',
    },
  };
});
