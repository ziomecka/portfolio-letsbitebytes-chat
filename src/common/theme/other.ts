import {
  flexColumnJustifyFlexStartAlignCenter,
} from './flexes';

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
    MuiPaper: {
      root: {
        ...flexColumnJustifyFlexStartAlignCenter,
        boxSizing: 'border-box'
      }
    },
  }
};

export { other };