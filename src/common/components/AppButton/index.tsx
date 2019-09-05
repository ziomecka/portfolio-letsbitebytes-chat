import * as React from 'react';
import { Button } from '@material-ui/core/';
import { styles } from './styles';
import { withStyles } from '@material-ui/core/styles';

const AppButton: React.FunctionComponent<AppButtonProps> = (props) => {
  const {
    autoFocus = false,
    classes: { adjustTouchRipple, transparentVariant },
    buttonProps,
    variant,
  } = props;

  buttonProps.variant = buttonProps.variant || 'contained';

  return (
    <div
      className={ adjustTouchRipple }
      {...{ autoFocus }}
    >
      <Button
        className={`${ variant === AppButtonVariant.transparent ? transparentVariant : '' }`}
        { ...buttonProps }
      >
        { props.children }
      </Button>
    </div>
  );
};

const StyledButton = withStyles(styles)(AppButton);

export { StyledButton as AppButton };
