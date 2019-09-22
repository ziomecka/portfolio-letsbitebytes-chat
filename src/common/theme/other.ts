import {
  BUTTON_GREY_SHADE,
  BUTTON_SIZE,
  SPACING_LARGE,
  SPACING_REGULAR,
} from './other-constants';
import { Overrides } from '@material-ui/core/styles/overrides';
import { Theme } from '@material-ui/core';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

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
  const backgroundColorButton = palette.grey[ BUTTON_GREY_SHADE ];

  const largeSpacing = spacing(SPACING_LARGE);
  const regularSpacing = spacing(SPACING_REGULAR);

  const marginPadding = buildMarginPadding(regularSpacing, regularSpacing);

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
      MuiBox: {
        root: {
          ...maxWidthHeight,
        },
      },
      MuiButton: {
        text: {
          paddingLeft: 0,
        },
        contained: {
          backgroundColor: backgroundColorButton,
        },
      },
      MuiButtonBase: {
        root: {
          width: typography.fontSize * buttonSize,
          ...marginPadding,
        },
      },
      MuiInputBase: {
        root: {
          ...marginPadding,
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
            width: '100%',
            marginBottom: typography.h1.fontSize,
          },
          '&$h2': {
            width: '100%',
            marginBottom: regularSpacing,
          },
        },
      },
    } as Overrides,
  };
};

export { other };
