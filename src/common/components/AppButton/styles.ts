import { Theme } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/styles';

export const styles = createStyles(({ palette }: Theme) => {
  const widthAdjustment = '1rem';

  return {
    box: {
      // move to common style as reset of Box overridden properties (see theme overrides MuiBox)
      height: 'initial',
      width: 'initial',
      maxWidth: 'none',
      maxHeight: 'none',
    },
    adjustTouchRipple: {
      '& button': {
        '& span': {
          left: '0!important',
          '& span': {
            left: '0!important',
            width: '100%!important',
            '& span': {
              left: `calc(${ widthAdjustment } / 2)!important`,
              width: `calc(100% - ${ widthAdjustment })!important`,
            },
          },
        },
      },
    },
    transparentVariant: {
      backgroundColor: palette.background.paper,
      border: `1px solid ${ palette.text.secondary }`,
      boxShadow: 'none',
    },
    flexVariant: {
      width: 'auto',
      margin: 0,
    },
  };
});
