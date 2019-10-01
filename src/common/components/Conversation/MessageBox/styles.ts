import {
  LARGE_SPACING,
  MESSAGE_BOX_MAX_HEIGHT,
  REGULAR_SPACING,
  SEND_BUTTON_MAX_WIDTH,
  SMALL_SPACING,
} from '../../../theme/other-constants';
import { Theme } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/styles';
import { scrollBar } from '../../styles';

export const styles = createStyles((theme: Theme) => {
  const {
    shape: { borderRadius },
    spacing,
  } = theme;

  const regularSpacing = spacing(REGULAR_SPACING);
  const smallSpacing = spacing(SMALL_SPACING);
  const largeSpacing = spacing(LARGE_SPACING);

  return {
    box: {
      paddingRight: regularSpacing * 2,
      height: MESSAGE_BOX_MAX_HEIGHT,
    },
    inputBox: {
      marginRight: largeSpacing,
      flexGrow: 1,
      maxHeight: '100%',
    },
    input: {
      padding: 0,
      paddingBottom: smallSpacing,
      margin: 0,
      borderRadius,
    },
    button: {
      marginBottom: regularSpacing,
      marginRight: 0,
      maxWidth: SEND_BUTTON_MAX_WIDTH,
    },
    // @ts-ignore
    ...scrollBar(theme),
  };
});
