import { Overrides } from '@material-ui/core/styles/overrides';

const Input = ({
  regularSpacing,
  typography: { fontSize },
}: AppTheme): Overrides => {
  return {
    MuiInputLabel: {
      root: {
        fontSize,
      },
    },
    MuiInputBase: {
      root: {
        margin: regularSpacing,
        marginLeft: 0,
        padding: regularSpacing,
        paddingLeft: 0,
      },
      multiline: {
        padding: 0,
        paddingBottom: regularSpacing,
        margin: 0,
        height: '100%',
        alignItems: 'flex-end',
        overflow: 'hidden',
      },
    },
  } as Overrides;
};

export { Input };
