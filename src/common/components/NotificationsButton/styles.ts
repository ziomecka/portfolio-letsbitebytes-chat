import {
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import { SPACING_REGULAR } from '../../theme/other-constants';

export const styles = createStyles(({
  spacing,
  palette: { secondary: { main }, grey: { [ 500 ]: grey } },
}: Theme) => {
  const regularSpacing = spacing(SPACING_REGULAR);
  // const border = '.5rem';

  return {
    button: {
      position: 'absolute',
      right: regularSpacing,
      bottom: regularSpacing,
      textAlign: 'center',
      width: 'auto',
      backgroundColor: grey,
      // border: `${ border } solid ${ main }`,
      borderRadius: '50%',
    },
    svg: {
      fontSize: '2rem',
      transformOrigin: '50% 90%',
    },
    shake: {
      animation: 'shake .1s linear .1s 20 alternate',
    },
    '@global': {
      '@keyframes shake': {
        '0%': {
          transform: 'rotate(-12deg) scale(1.2, 1.2)',
        },
        '100%': {
          transform: 'rotate(13deg) scale(1.2, 1.2)',
        },
      },
    },
  };
});
