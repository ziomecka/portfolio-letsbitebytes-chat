import { createStyles } from '@material-ui/core/styles';
import { fontSizes } from './theme/typography-constants';

export const styles = createStyles(() => ({
  rootBox: {
    margin: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  box: {
    // * 2 => h1.fontSize + h1 marginBottom (overrides MuiTypography, root, h1, marginBottom)
    height: `calc(100% - ${ fontSizes.h1 } * 2)`,
    width: '100%',
  },
}
));
