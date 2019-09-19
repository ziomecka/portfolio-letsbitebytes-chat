import {
  BUTTON_GREY_SHADE,
  SPACING_REGULAR,
  SPACING_SMALL,
} from '../../../common/theme/other-constants';
import { Theme } from '@material-ui/core/styles';
import { styles as commonStyles } from '../styles';
import { createStyles } from '@material-ui/styles';

export const styles = createStyles((theme: Theme) => {
  const {
    palette,
    shape: { borderRadius },
    spacing,
  } = theme;

  const partnerBackground = palette.grey[ BUTTON_GREY_SHADE ];
  const userBackground = palette.primary.light;
  const userMessage = palette.background.paper;

  // !important to override MuiTypography
  const inlineBlock = 'inline-block!important';
  const regularSpacing = spacing(SPACING_REGULAR);
  const smallSpacing = spacing(SPACING_SMALL);
  const INPUT_HEIGHT = '80';

  return {
    box: {
      display: inlineBlock,
      borderRadius,
      padding: regularSpacing,
    },
    inputBox: {
      width: '100%',
    },
    input: {
      paddingLeft: `${ margin * 2 }px!important`,
    },
    typography: {
      flex: '0 auto',
      wordBreak: 'break-word',
    },
    userTypography: {
      color: userMessage,
      backgroundColor: userBackground,
      marginLeft: regularSpacing,
    },
    partnerTypography: {
      backgroundColor: partnerBackground,
      marginRight: regularSpacing,
    },
    delivered: { // todo pseudo
    },
    undelivered: { // todo pseudo
    },
    // @ts-ignore
    ...commonStyles(theme), // scrollBar class
  };
});
