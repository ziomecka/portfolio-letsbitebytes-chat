import { Theme } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/styles';

export const styles = createStyles(({
  shape: { borderRadius },
}: Theme) => {
  const boxHeight = '80px'; // todo calculate from theme ?

  return {
    box: {
      borderRadius,
      height: `calc(100% - ${ boxHeight })`,
      overflow: 'hidden',
      width: 'auto',
    },
    buttonsBox: {
      height: boxHeight,
    },
  };
});
