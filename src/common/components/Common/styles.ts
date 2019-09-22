import {
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import { SPACING_LARGE } from '../../theme/other-constants';

export const styles = createStyles(({ spacing, typography }: Theme) => ({
  rootBox: {
    position: 'relative',
    margin: 0,
    padding: spacing(SPACING_LARGE),
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  box: {
    // * 2 => h1.fontSize + h1 marginBottom (overrides MuiTypography, root, h1, marginBottom)
    height: `calc(100% - ${ typography.h1.fontSize } * 2)`,
    width: '100%',
  },
}));
