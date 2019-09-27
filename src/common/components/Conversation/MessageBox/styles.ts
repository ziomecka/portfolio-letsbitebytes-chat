import {
  REGULAR_SPACING,
  SMALL_SPACING,
} from '../../../theme/other-constants';
import { Theme } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/styles';

export const styles = createStyles((theme: Theme) => {
  const {
    shape: { borderRadius },
    spacing,
  } = theme;

  const regularSpacing = spacing(REGULAR_SPACING);
  const smallSpacing = spacing(SMALL_SPACING);
  const INPUT_HEIGHT = '80';

  return {
    box: {
      paddingRight: regularSpacing * 2,
      height: `${ INPUT_HEIGHT }px`,
    },
    input: {
      padding: 0,
      paddingBottom: smallSpacing,
      margin: 0,
      borderRadius,
    },
  };
});
