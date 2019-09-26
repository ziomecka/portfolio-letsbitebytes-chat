import * as React from 'react';
import {
  AppButton,
  AppForm,
} from '../';
import { Typography } from '@material-ui/core';
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
      <Typography variant="h2"
        style={{
          fontSize: '2rem',
          height: '2rem',
        }}
      >
        {texts.heading}
      </Typography>
      <AppForm >
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
          variant={AppButtonVariant.transparent}
        >
          {createUserButtonText}
        </AppButton>
      </AppForm>
    </React.Fragment>
  );
};

export { Public };
