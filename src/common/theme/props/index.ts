import { ComponentsProps } from '@material-ui/core/styles/props';
import { Grid } from '@material-ui/core';

const props = {
  MuiPaper: {
    elevation: 0,
  },
  MuiButtonBase: {
    disableRipple: false,
    disableTouchRipple: true,
    focusRipple: true,
  },
  MuiDialog: {
    PaperProps: { component: Grid },
    hideBackdrop: true,
    disablePortal: true,
    transitionDuration: { exit: 0 },
  },
} as ComponentsProps;

export { props };
