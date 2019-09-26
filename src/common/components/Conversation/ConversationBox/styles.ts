import { Theme, createStyles } from '@material-ui/core';
import { SPACING_REGULAR } from '../../../theme/other-constants';
import { scrollBar } from '../../styles';

export const styles = createStyles((theme: Theme) => {
  const {
    palette,
    spacing,
  } = theme;

  const partnerBackground = palette.grey[ 300 ];
  const userBackground = palette.primary.light;
  const userMessage = palette.background.paper;

  const regularSpacing = spacing(SPACING_REGULAR);
  const INPUT_HEIGHT = '80';

  return {
    mainBox: {
      height: `calc(100% - ${ INPUT_HEIGHT }px)`,
      padding: `${ regularSpacing } 0`,
    },
    conversationBox: {
      paddingRight: regularSpacing,
    },
    typography: {
      wordBreak: 'break-word',
    },
    userListItem: {
      justifyContent: 'flex-end',
    },
    userTypography: {
      color: userMessage,
      backgroundColor: userBackground,
    },
    partnerTypography: {
      backgroundColor: partnerBackground,
    },
    delivered: { // todo pseudo
    },
    undelivered: { // todo pseudo
    },
    // @ts-ignore
    ...scrollBar(theme), // scrollBar classx
  };
});
