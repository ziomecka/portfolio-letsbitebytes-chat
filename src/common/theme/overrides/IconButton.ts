import { Overrides } from '@material-ui/core/styles/overrides';

const IconButton = (): Overrides => {
  return {
    MuiIconButton: {
      root: {
        margin: 0,
        padding: 0,
        width: 'auto',
        borderRadius: '50%',
      },
    },
  } as Overrides;
};

export { IconButton };
