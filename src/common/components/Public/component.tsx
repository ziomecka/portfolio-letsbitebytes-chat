import * as React from 'react';
import { AppButton } from '../AppButton/';
import { AppRoutes } from '../../../common/constants';
import texts from './texts';

const Public: React.FunctionComponent<PublicWithRouterProps> = (props) => {
  const loginButtonText = texts.loginButton;
  const createUserButtonText = texts.createUserButton;

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
