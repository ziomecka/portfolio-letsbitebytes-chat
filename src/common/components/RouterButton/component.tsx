import * as React from 'react';
import { AppButton } from '../';
import { IconButton } from '@material-ui/core';

const RouterButton: React.FunctionComponent<RouterButtonProps> = ({
  children,
  buttonProps,
  history,
  to,
  icon = false,
  ...other
}) => {
  const onClick = (): void => history.push(to);

  if (history.location.pathname !== to) {
    return (
      !icon && (
        <AppButton
          buttonProps={ { ...buttonProps, onClick }}
          { ...other }
        >
          {children}
        </AppButton>
      ) || (
        <IconButton onClick={onClick}>
          {children}
        </IconButton>
      )
    );
  }

  return null;
};

export { RouterButton };
