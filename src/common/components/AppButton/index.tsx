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
  buttonProps = {},
  variant,
}) => {
  buttonProps.variant = buttonProps.variant || 'contained';

  const variants = new Map([
    [ AppButtonVariant.transparent, classes.transparentVariant ],
    [ AppButtonVariant.flex, classes.flexVariant ],
  ]);

  return (
    <Grid
      item
      className={ `${ classes.box } ${ classes.adjustTouchRipple }` }
      {...{ autoFocus }}
    >
      <Button
        classes={{ root: variants.get(variant) }}
        { ...buttonProps }
      >
        { children }
      </Button>
    </Grid>
  );
};

const StyledButton = withStyles(styles)(AppButton);

export { StyledButton as AppButton };
