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

  const regularSpacing = spacing(SPACING_REGULAR);
  const smallSpacing = spacing(SPACING_SMALL);
  const INPUT_HEIGHT = '80';

  return {
    mainBox: {
      height: `calc(100% - ${ INPUT_HEIGHT }px)`,
      padding: `${ regularSpacing } 0`,
    },
    conversationBox: {
      paddingRight: regularSpacing,
    },
    messageBox: {
      paddingRight: regularSpacing * 2,
    },
    typographyBox: {
      borderRadius,
      padding: regularSpacing,
    },
    inputBox: {
      marginTop: 0,
      marginBottom: 0,
      paddingTop: 0,
      maxHeight: `${ INPUT_HEIGHT }px`,
      height: `${ INPUT_HEIGHT }px`,
    },
    input: {
      padding: 0,
      paddingBottom: smallSpacing,
      margin: 0,
      borderRadius,
    },
    typography: {
      flex: '0 auto',
      wordBreak: 'break-word',
    },
    userListItem: {
      justifyContent: 'flex-end',
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
