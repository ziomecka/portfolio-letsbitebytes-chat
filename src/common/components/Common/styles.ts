import {
  Theme,
  createStyles,
} from '@material-ui/core/styles';

export const styles = createStyles(({ typography }: Theme) => ({
  rootBox: {
    margin: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  box: {
    // * 2 => h1.fontSize + h1 marginBottom (overrides MuiTypography, root, h1, marginBottom)
    height: `calc(100% - ${ typography.h1.fontSize } * 2)`,
    width: '100%',
  },
}
));
