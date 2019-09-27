import {
  LARGE_SPACING,
  REGULAR_SPACING,
} from '../../theme/other-constants';
import {
  Theme,
  createStyles,
} from '@material-ui/core/styles';

export const styles = createStyles(({
  spacing,
}: Theme) => {
  const height = 40;
  const regularSpacing = spacing(REGULAR_SPACING);

  return {
    actionButton: {
      width: 'initial',
      padding: 0,
      marginTop: 0,
      marginBottom: 0,
      marginRight: 0,
    },
    topActions: {
      display: 'flex',
      justify: 'flex-end',
      position: 'absolute',
      top: regularSpacing * .5,
      left: 0,
      width: '100%',
      height,
      marginBottom: '0',
    },
    title: {
      paddingTop: `${ height - regularSpacing * 2.5 }px`,
    },
  };
});
