import { Theme } from '@material-ui/core/styles';
import { createStyles } from '@material-ui/styles';

// TODO verify important
export const styles = createStyles((theme: Theme) => {
  const widthAdjustment = '1rem';

  return {
    adjustTouchRipple: {
      '& button': {
        '& span': {
          left: '0!important',
          '& span': {
            left: `0!important`, // TODO is needed?
            width: `100%!important`, // TODO is needed?
            '& span': {
              left: `calc(${ widthAdjustment } / 2)!important`,
              width: `calc(100% - ${ widthAdjustment })!important`,
            },
          },
        },
      },
    },
    transparentVariant: {
      backgroundColor: `#${ theme.palette.background.default }!important`,
      border: `1px solid ${ theme.palette.text.secondary }!important`,
      boxShadow: `none!important`,
    },
  };
});