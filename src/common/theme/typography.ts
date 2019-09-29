import {
  fontFamily,
  fontSize,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  textTransformButton,
} from './typography-constants';
import createTypography from '@material-ui/core/styles/createTypography';
import { palette } from './palette';

const { h1, h2, h3, button } = fontSizes;
const { lineHeight } = lineHeights;
const {
  fontWeightBold,
  fontWeightLight,
  fontWeightMedium,
  fontWeightRegular,
} = fontWeights;
const commonHeadingProps = {
  fontWeight: fontWeights.heading,
  lineHeight: lineHeights.heading,
  letterSpacing: letterSpacings.heading,
};

const typography = createTypography(palette, {
  fontFamily,
  fontSize,
  fontWeightMedium,
  fontWeightLight,
  fontWeightRegular,
  fontWeightBold,
  h1: {
    fontSize: h1,
    ...commonHeadingProps,
  },
  h2: {
    fontSize: h2,
    ...commonHeadingProps,
  },
  h3: {
    fontSize: h3,
    ...commonHeadingProps,
  },
  button: {
    fontSize: button,
    textTransform: textTransformButton,
    fontFamily,
    lineHeight: lineHeights.button,
    letterSpacing: letterSpacings.button,
    fontWeight: fontWeights.button,
  },
  body2: {
    lineHeight,
  },
  body1: {
    lineHeight,
  },
});

export { typography };
