import { DIALOG_MAX_WIDTH } from './constants';
import { Overrides } from '@material-ui/core/styles/overrides';

const Dialog = ({
  palette,
  typography,
  shape: { borderRadius },
}: AppTheme): Overrides => {
  return {
    MuiDialog: {
      paper: {
        maxHeight: 'none',
        width: 'initial',
        height: 'initial',
        position: 'relative',
        whiteSpace: 'pre-wrap',
        overflow: 'hidden',
        padding: 0,
        maxWidth: DIALOG_MAX_WIDTH,
        borderRadius,
      },
    },
    MuiDialogContent: {
      root: {
        borderBottom: `1px solid ${ palette.grey[ 100 ] }`,
        borderTop: `1px solid ${ palette.grey[ 100 ] }`,
      },
    },
    MuiDialogContentText: {
      root: {
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize,
        fontWeight: typography.fontWeightLight,
      },
    },
  };
};

export { Dialog };
