import { Theme, createStyles } from '@material-ui/core';

export const styles = createStyles(({
  shape: { borderRadius },
}: Theme) => {
  return {
    box: {
      borderRadius,
      overflow: 'hidden',
      width: 'auto',
    },
    },
  };
});
