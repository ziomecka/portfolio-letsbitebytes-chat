import { Theme, createStyles } from '@material-ui/core';
import { ACTIVE_COLOR } from '../../theme/other-constants';
import { scrollBar } from '../styles';

export const styles = createStyles((theme: Theme) => {
  const {
    palette,
    typography: { fontSize },
  } = theme;

  return {
    text: {
      fontSize: `${ fontSize }px!important`,
    },
    active: {
      color: ACTIVE_COLOR,
    },
    activeSelected: {
      backgroundColor: `${ ACTIVE_COLOR }!important`,
      color: palette.primary.contrastText,
    },
    button: {
      animation: 'drawAttention .7s linear .5s 5 alternate',
    },
    '@global': {
      '@keyframes drawAttention': {
        '0%': {
          transform: 'scale(1.5) rotateY(0deg)',
        },
        '100%': {
          transform: 'scale(1.5) rotateY(180deg)',
        },
      },
    },
    // @ts-ignore
    ...scrollBar(theme), // scrollBar class
  };
});
