import { createStyles } from '@material-ui/core/styles';

export const styles = createStyles(() => {
  return {
    root: {
      position: 'absolute!important',
      top: '50%!important',
      left: '50%!important',
      transform: 'translate(-50%, -50%)',
      height: '100%',
      width: '100%',
    },
  };
});
