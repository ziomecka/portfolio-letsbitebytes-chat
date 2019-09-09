import {
  BUTTON_GREY_SHADE,
  BUTTON_SIZE,
  SPACING_LARGE,
  SPACING_REGULAR,
} from './other-constants';
import { Overrides } from '@material-ui/core/styles/overrides';
import { Theme } from '@material-ui/core';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { flexColumnJustifyFlexStartAlignLeft } from './flexes';

const buildMarginPadding = (margin: number, padding: number): unknown => ({
  margin,
  marginLeft: 0,
  padding,
  paddingLeft: 0,
});

const other = (theme: Theme): ThemeOptions => {
  const buttonSize = BUTTON_SIZE;
  const backgroundColorButton = theme.palette.grey[ BUTTON_GREY_SHADE ];

  const largeSpacing = theme.spacing(SPACING_LARGE);
  const regularSpacing = theme.spacing(SPACING_REGULAR);

  const marginPadding = buildMarginPadding(regularSpacing, regularSpacing);

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
          width: theme.typography.fontSize * buttonSize,
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
          ...flexColumnJustifyFlexStartAlignLeft,
          boxSizing: 'border-box',
          margin: largeSpacing,
          padding: largeSpacing,
        },
      },
      MuiTouchRipple: {
        root: {
          boxSizing: 'border-box',
          width: '100%',
        },
      },
    } as Overrides,
  };
};

export { other };
