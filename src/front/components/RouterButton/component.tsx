import * as React from 'react';
import { AppButton } from '../../../common/';

const RouterButton: React.FunctionComponent<RouterButtonProps> = ({
  children,
  buttonProps,
  history,
  to,
  ...other
}) => {
  const onClick = (): void => history.push(to);

  return (history.location.pathname !== to &&
    <AppButton
      buttonProps={ { ...buttonProps, onClick }}
      { ...{ ...other } }
    >
      {children}
    </AppButton>
  );
};

export { RouterButton };
