import {
  BUTTON_GREY_SHADE,
  SPACING_REGULAR,
} from '../../../common/theme/other-constants';
import { Theme } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/styles';

export const styles = createStyles((theme: Theme) => {
  const backgroundColorPartnerMessage = theme.palette.grey[ BUTTON_GREY_SHADE ];
  const backgroundColorUserMessage = theme.palette.primary.light;
  // !important to override MuiTypography
  const colorUserMessage = `#${ theme.palette.background.paper }!important`;

  const borderRadius = theme.shape.borderRadius;
  const margin = theme.spacing(SPACING_REGULAR / 2);
  const padding = theme.spacing(SPACING_REGULAR);

  // TODO calculate
  const maxHeightConversation = '400px';
  const heightConversation = '100px';

  // !important to override MuiTypography
  const inlineBlock = 'inline-block!important';

  return {
    box: {
      display: inlineBlock,
      borderRadius,
      marginBottom: margin,
      marginTop: margin,
      padding,
    },
    // TODO flexes - use global flexes?
    conversationBox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      maxHeight: maxHeightConversation,
      height: heightConversation,
      overflowY: 'scroll',
    },
    typographyBox: {
      position: 'relative',
    },
    typography: {
      display: inlineBlock,
    },
    userTypography: {
      color: colorUserMessage,
      backgroundColor: backgroundColorUserMessage,
      position: 'absolute',
      right: 0,
    },
    partnerTypography: {
      backgroundColor: backgroundColorPartnerMessage,
    },
  };
});