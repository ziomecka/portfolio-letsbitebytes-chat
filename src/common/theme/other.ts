import {
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
    },
    MuiButtonBase: {
      root: {
        justifyContent: 'flex-start',
        maxWidth: BUTTON_WIDTH,
        ...marginPadding,
      },
    },
    MuiInputBase: {
      root: {
        ...marginPadding,
      },
    },
    MuiPaper: {
      // @ts-ignore
      root: {
        ...flexColumnJustifyFlexStartAlignLeft,
        boxSizing: 'border-box',
        margin: MARGIN_XL,
        padding: PADDING_XL,
      }
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