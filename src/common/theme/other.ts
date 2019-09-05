import {
  BUTTON_BACKGROUND,
  BUTTON_WIDTH,
  MARGIN,
  MARGIN_XL,
  PADDING,
  PADDING_XL,
} from './other-constants';
import {
  flexColumnJustifyFlexStartAlignLeft,
} from './flexes';

const buildMarginPadding = (margin = MARGIN, padding = PADDING): unknown => ({
  margin,
  marginLeft: 0,
  padding,
  paddingLeft: 0,
});

const marginPadding = buildMarginPadding();

const other = {
  props: {
    MuiPaper: {
      elevation: 0
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
        backgroundColor: BUTTON_BACKGROUND, // TODO make dependent on palette.text.hint
      },
    },
    MuiButtonBase: {
      root: {
        width: BUTTON_WIDTH,
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
        margin: MARGIN_XL,
        padding: PADDING_XL,
      }
    },
    MuiTouchRipple: {
      root: {
        boxSizing: 'border-box',
        width: `100%`,
      },
    },
    MuiTypography: {
      root: {
        textAlign: 'left',
        width: '100%',
        ...buildMarginPadding(MARGIN_XL, PADDING_XL),
      },
    },
  }
};

export { other };