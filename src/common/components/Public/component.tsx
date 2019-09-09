import * as React from 'react';
import { AppButton } from '../AppButton/';
import { AppRoutes } from '../../../common/constants';

const LOGIN_BUTTON_TEXT = 'Start chatting';
const Public: React.FunctionComponent<PublicWithRouterProps> = (props) => {
  const loginButtonText = LOGIN_BUTTON_TEXT;

  const goToLogin = (): void => {
    props.history.push(AppRoutes.loginRoute);
  };

  return (
    <AppButton
      autoFocus
      buttonProps={{
        autoFocus: true,
        onClick: goToLogin,
      }}
    >
      {loginButtonText}
    </AppButton>
  );
};

export { Public };
