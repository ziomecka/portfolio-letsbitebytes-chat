import { createStyles } from '@material-ui/core/styles';

export const styles = createStyles(() => {
  return {
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
