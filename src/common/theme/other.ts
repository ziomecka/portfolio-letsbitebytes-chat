import {
  APP_NAV_HEIGHT,
  BUTTON_SIZE,
  DIALOG_MAX_WIDTH,
  FORM_HELPER_TEXT_MAX_WIDTH,
  LARGE_SPACING,
  REGULAR_SPACING,
} from './other-constants';
import { Overrides } from '@material-ui/core/styles/overrides';
import { Theme } from '@material-ui/core';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { fontSizes } from './typography-constants';

const buildMarginPadding = (margin: number, padding: number): unknown => ({
  margin,
  marginLeft: 0,
  padding,
  paddingLeft: 0,
});

const other = ({
  palette,
  spacing,
  typography,
  shape: { borderRadius },
}: Theme): ThemeOptions => {

  const buttonSize = BUTTON_SIZE;

  const largeSpacing = spacing(LARGE_SPACING);
  const regularSpacing = spacing(REGULAR_SPACING);

  const marginPadding = buildMarginPadding(regularSpacing, regularSpacing);

  const appBarHeight = APP_NAV_HEIGHT;
  const dialogMaxWidth = DIALOG_MAX_WIDTH;
  const formHelperTextMaxWidth = FORM_HELPER_TEXT_MAX_WIDTH;

  const {
    fontSize,
    fontWeightBold,
  } = typography;

  const maxWidthHeight = {
    maxHeight: '100%',
    maxWidth: '100%',
    height: '100%',
    width: '100%',
  };

  return {
    props: {
      MuiPaper: {
        elevation: 0,
      },
      MuiButtonBase: {
        disableRipple: false,
        disableTouchRipple: true,
        focusRipple: true,
      },
    },
    overrides: {
      MuiAppBar: {
        root: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: appBarHeight,
          maxHeight: appBarHeight,
        },
      },
      MuiBottomNavigation: {
        root: {
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: APP_NAV_HEIGHT,
          justifyContent: 'flex-end',
          boxSizing: 'border-box',
          padding: `0 ${ largeSpacing }px`,
          backgroundColor: 'transparent',
        },
      },
      MuiBox: {
        root: {
          ...maxWidthHeight,
        },
      },
      MuiButton: {
        text: {
          paddingLeft: 0,
        },
        outlined: {
          fontWeight: fontWeightBold,
          borderWidth: '2px',
        },
        containedPrimary: {
          fontWeight: fontWeightBold,
        },
        containedSecondary: {
          fontWeight: fontWeightBold,
        },
      },
      MuiButtonBase: {
        root: {
          width: fontSize * buttonSize,
          ...marginPadding,
        },
      },
      MuiInputLabel: {
        root: {
          fontSize: fontSizes.inputLabel,
        },
      },
      MuiDialog: {
        paper: {
          maxHeight: 'none',
          width: 'initial',
          height: 'initial',
          position: 'relative',
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          padding: largeSpacing,
          maxWidth: dialogMaxWidth,
          borderRadius,
        },
      },
      MuiDialogContentText: {
        root: {
          fontFamily: typography.fontFamily,
          fontSize: typography.fontSize,
          fontWeight: typography.fontWeightLight,
        },
      },
      MuiFormHelperText: {
        root: {
          maxWidth: formHelperTextMaxWidth,
        },
      },
      MuiIconButton: {
        root: {
          margin: 0,
          padding: 0,
          width: 'auto',
          borderRadius: '50%',
        },
      },
      MuiInputBase: {
        root: {
          ...marginPadding,
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
      MuiPaper: {
        root: {
          boxSizing: 'border-box',
          margin: 0,
          padding: largeSpacing,
          ...maxWidthHeight,
        },
      },
      MuiTouchRipple: {
        root: {
          boxSizing: 'border-box',
          width: '100%',
        },
      },
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
    } as Overrides,
  };
};

export { other };
