import {
  flexColumnJustifyFlexStartAlignLeft,
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
    MuiButton: {
      text: {
        paddingLeft: 0,
      },
    },
    MuiButtonBase: {
      root: {
        justifyContent: 'flex-start',
        maxWidth: '200px',
      },
    },
    MuiPaper: {
      root: {
        ...flexColumnJustifyFlexStartAlignLeft,
        boxSizing: 'border-box'
      }
    },
    MuiTypography: {
      root: {
        textAlign: 'left',
        width: '100%'
      },
    },
  }
};

export { other };