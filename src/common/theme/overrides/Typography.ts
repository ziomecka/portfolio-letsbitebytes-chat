import { Overrides } from '@material-ui/core/styles/overrides';

const Typography = ({ largeSpacing }: AppTheme): Overrides => {
  return {
    MuiTypography: {
      root: {
        margin: 0,
        '&$h1': {
          display: 'inline-block',
          width: 'auto',
        },
        '&$h2': {
          marginBottom: largeSpacing,
        },
      },
    },
  } as Overrides;
};

export { Typography };
