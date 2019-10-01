import { Overrides } from '@material-ui/core/styles/overrides';

const List = ({
  palette,
  shape: { borderRadius },
  regularSpacing,
}: AppTheme): Overrides => {
  return {
    MuiList: {
      root: {
        flexDirection: 'column',
        flexWrap: 'nowrap',
        width: '100%',
        borderRadius,
      },
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    MuiListItem: {
      root: {
        width: '100%',
        margin: `${ regularSpacing }px 0`,
        padding: regularSpacing,
        '&$selected': {
          backgroundColor: palette.grey[ 100 ],
          borderRadius,
        },
      },
    },
    MuiListItemText: {
      root: {
        margin: 0,
        marginTop: 0,
        marginBottom: 0,
        padding: 0,
        fontSize: '1rem',
      },
    },
  } as Overrides;
};

export { List };
