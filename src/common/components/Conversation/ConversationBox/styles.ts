import { Theme, createStyles } from '@material-ui/core';
import { REGULAR_SPACING } from '../../../theme/other-constants';
import { scrollBar } from '../../styles';

export const styles = createStyles((theme: Theme) => {
  const {
    palette,
    spacing,
  } = theme;

  const contactBackground = palette.grey[ 300 ];
  const userBackground = palette.primary.light;
  const userMessage = palette.background.paper;

  const regularSpacing = spacing(REGULAR_SPACING);
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
    contactTypography: {
      backgroundColor: contactBackground,
    },
    delivered: { // todo pseudo
    },
    undelivered: { // todo pseudo
    },
    // @ts-ignore
    ...scrollBar(theme), // scrollBar classx
  };
});
