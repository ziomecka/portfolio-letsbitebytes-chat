import {
  fontFamily,
  fontSize,
  fontSizes,
  fontWeightBold,
  fontWeightButton,
  fontWeightHeading,
  fontWeightLight,
  fontWeightMedium,
  fontWeightRegular,
  letterSpacingButton,
  letterSpacingHeading,
  lineHeightButton,
  lineHeightHeading,
  textTransformButton,
} from './typography-constants';
import createTypography from '@material-ui/core/styles/createTypography';
import { palette } from './palette';

const { h1, h2, h3, button } = fontSizes;

const typography = createTypography(palette, {
  fontFamily,
  fontSize,
  fontWeightMedium,
  fontWeightLight,
  fontWeightRegular,
  fontWeightBold,
  h1: {
    fontSize: h1,
    fontWeight: fontWeightHeading,
    lineHeight: lineHeightHeading,
    letterSpacing: letterSpacingHeading,
  },
  h2: {
    fontSize: h2,
    fontWeight: fontWeightHeading,
    lineHeight: lineHeightHeading,
    letterSpacing: letterSpacingHeading,
  },
  h3: {
    fontSize: h3,
    fontWeight: fontWeightHeading,
    lineHeight: lineHeightHeading,
    letterSpacing: letterSpacingHeading,
  },
  button: {
    fontSize: button,
    textTransform: textTransformButton,
    fontFamily,
    lineHeight: lineHeightButton,
    letterSpacing: letterSpacingButton,
    fontWeight: fontWeightButton,
  },
});

export { typography };