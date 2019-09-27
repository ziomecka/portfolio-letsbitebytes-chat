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
  const largeSpacing = spacing(LARGE_SPACING);
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
      justifyContent: 'flex-end',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height,
      padding: `0 ${ regularSpacing + largeSpacing }px`,
      margin: `${ largeSpacing + regularSpacing }px 0 ${ regularSpacing }px`,
    },
    title: {
      paddingTop: `${ height + largeSpacing + regularSpacing }px`,
    },
  };
});
