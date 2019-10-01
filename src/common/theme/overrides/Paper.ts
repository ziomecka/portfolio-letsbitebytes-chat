import { Overrides } from '@material-ui/core/styles/overrides';

const Paper = ({ largeSpacing }: AppTheme): Overrides => {
  return {
    MuiPaper: {
      root: {
        boxSizing: 'border-box',
        margin: 0,
        padding: largeSpacing,
        maxHeight: '100%',
        maxWidth: '100%',
        height: '100%',
        width: '100%',
      },
    },
  } as Overrides;
};

export { Paper };
