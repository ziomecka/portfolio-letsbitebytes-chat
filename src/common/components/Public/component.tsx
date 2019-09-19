import * as React from 'react';
import { AppButton } from '../AppButton/';
import { AppRoutes } from '../../../common/constants';
import texts from './texts';

const Public: React.FunctionComponent<PublicWithRouterProps> = ({ history }) => {
  const loginButtonText = texts.loginButton;
  const createUserButtonText = texts.createUserButton;

  const goToLogin = (): void => {
    history.push(AppRoutes.loginRoute);
  };

  const goToCreateUser = (): void => {
    history.push(AppRoutes.createUserRoute);
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
        buttonProps={{
          onClick: goToCreateUser,
        }}
      >
        {createUserButtonText}
      </AppButton>
    </React.Fragment>
  );
};

export { Public };
