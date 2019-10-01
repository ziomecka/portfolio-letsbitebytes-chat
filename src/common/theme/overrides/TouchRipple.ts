import { Overrides } from '@material-ui/core/styles/overrides';

const TouchRipple = (): Overrides => {
  return {
    MuiTouchRipple: {
      root: {
        boxSizing: 'border-box',
        width: '100%',
      },
    },
  } as Overrides;
};

export { TouchRipple };
