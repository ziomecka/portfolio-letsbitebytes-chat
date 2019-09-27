import {
  LARGE_SPACING,
  REGULAR_SPACING,
} from '../../theme/other-constants';
import { Theme, createStyles } from '@material-ui/core';

export const styles = createStyles(({
  breakpoints,
  palette,
  shape: { borderRadius },
  spacing,
  typography,
}: Theme) => {
  const largeSpacing = spacing(LARGE_SPACING);
  const regularSpacing = spacing(REGULAR_SPACING);

  const headingColor = palette.grey[ 700 ];
  const highlightedHeadingColor = palette.secondary.main;
  const containedHeadingColor = palette.primary.contrastText;
  const containedHeadingBackground = headingColor;

  const {
    fontSize,
    fontWeightBold,
  } = typography;

  return {
    box: {
      display: 'block',
      boxSizing: 'border-box',
      position: 'relative',
      padding: largeSpacing,
      borderRadius,
      height: '100%',
      overflow: 'visible',
      '& h2': {
        marginBottom: '0!important',
        fontSize: `${ fontSize }px!important`,
        letterSpacing: '.01em!important',
      },
      [ breakpoints.up('sm') ]: {
        '&:nth-of-type(1)': {
          marginRight: regularSpacing,
        },
        '&:nth-of-type(2)': {
          marginLeft: regularSpacing,
        },
      },
    },
    headingBox: {
      position: 'absolute',
      top: - fontSize - regularSpacing * 2,
      left: 0,
      width: '100%',
      height: 'auto',
      padding: `${ regularSpacing }px ${ largeSpacing }px`,
      borderRadius,
    },
    heading: {
      color: headingColor,
      '& span': {
        color: highlightedHeadingColor,
      },
    },
    headingBoxContained: {
      backgroundColor: containedHeadingBackground,
    },
    headingContained: {
      color: containedHeadingColor,
    },
    headingBold: {
      fontWeight: fontWeightBold,
    },
  };
});
