import { SPACING_REGULAR } from '../../../common/theme/other-constants';
import { Theme } from '@material-ui/core/styles';
import { styles as commonStyles } from '../styles';
import { createStyles } from '@material-ui/styles';

export const styles = createStyles((theme: Theme) => {
  const {
    typography: { fontWeightLight },
    shape: { borderRadius },
    spacing,
  } = theme;

  return {
    listItem: {
      borderRadius,
      padding: `0 ${ spacing(SPACING_REGULAR) }px`,
    },
    text: {
      fontWeight: fontWeightLight,
    },
    // @ts-ignore
    ...commonStyles(theme), // scrollBar class
  };
});
