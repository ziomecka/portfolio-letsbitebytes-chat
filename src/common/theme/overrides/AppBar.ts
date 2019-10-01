import { Overrides } from '@material-ui/core/styles/overrides';

const AppBar = ({ appNavHeight }: AppTheme): Overrides => {
  return {
    MuiAppBar: {
      root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: appNavHeight,
        maxHeight: appNavHeight,
      },
    },
  };
};

export { AppBar };
