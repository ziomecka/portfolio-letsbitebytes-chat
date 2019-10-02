import * as React from 'react';
import {
  Button,
  Grid,
} from '@material-ui/core/';
import { styles } from './styles';
import { withStyles } from '@material-ui/core/styles';

const AppButton: React.FunctionComponent<AppButtonProps> = ({
  autoFocus = false,
  children,
  classes,
  buttonProps,
}) => {

  Object.assign(buttonProps, {
    variant: buttonProps.variant || 'contained',
    color: buttonProps.color || 'primary',
  });

  return (
    <Grid
      item
      className={ `${ classes.box } ${ classes.adjustTouchRipple }` }
      {...{ autoFocus }}
    >
      <Button { ...buttonProps }>
        { children }
      </Button>
    </Grid>
  );
};

const StyledButton = withStyles(styles)(AppButton);

export { StyledButton as AppButton };
