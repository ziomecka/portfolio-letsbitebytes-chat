import { Theme, createStyles } from '@material-ui/core';
import { scrollBar } from '../styles';

export const styles = createStyles((theme: Theme) => {
  const { typography: { fontSize } } = theme;

  return {
    text: {
      fontSize: `${ fontSize }px!important`,
    },
    button: {
      margin: 0,
      textAlign: 'center',
      width: 'auto',
      borderRadius: '50%',
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
