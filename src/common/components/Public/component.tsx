import * as React from 'react';
import { AppButton } from '../AppButton/';
import { AppRoutes } from '../../../common/constants';

const LOGIN_BUTTON_TEXT = 'Login';
const CREATE_USER_BUTTON_TEXT = 'Create user';

const Public: React.FunctionComponent<PublicWithRouterProps> = (props) => {
  const loginButtonText = LOGIN_BUTTON_TEXT;
  const createUserButtonText = CREATE_USER_BUTTON_TEXT;

  const goToLogin = (): void => {
    props.history.push(AppRoutes.loginRoute);
  };

  const goToCreateUser = (): void => {
    props.history.push(AppRoutes.createUserRoute);
  };

  return (
    <React.Fragment>
      <AppButton
        autoFocus
        buttonProps={{
          autoFocus: true,
          onClick: goToLogin,
        }}
      >
        {loginButtonText}
      </AppButton>
      <AppButton
        autoFocus
        buttonProps={{
          autoFocus: true,
          onClick: goToCreateUser,
        }}
      >
        {createUserButtonText}
      </AppButton>
    </React.Fragment>
  );
};

export { Public };
