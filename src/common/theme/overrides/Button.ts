import { BUTTON_SIZE } from './constants';
import { Overrides } from '@material-ui/core/styles/overrides';

const Button = ({
  regularSpacing,
  typography,
}: AppTheme): Overrides => {
  const {
    fontSize,
    fontWeightBold,
  } = typography;

  return {
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
        margin: regularSpacing,
        padding: regularSpacing,
        width: fontSize * BUTTON_SIZE,
      },
    },
  } as Overrides;
};

export { Button };
