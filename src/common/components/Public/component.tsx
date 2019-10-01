import * as React from 'react';
import {
  AppButton,
  AppForm,
} from '../';
import {
  Box,
  Grid,
  Typography,
} from '@material-ui/core';
import texts from './texts';

const Public: React.FunctionComponent<PublicWithRouterProps> = ({ history }) => {
  const goToLogin = (): void => {
    history.push(AppRoutes.loginRoute);
  };

  const goToCreateUser = (): void => {
    history.push(AppRoutes.createUserRoute);
  };

  const fontSize = '2rem';

  return (
    <Grid
      container
      component={Box}
      style={{ alignContent: 'center' }}
      justify="center"
    >
      <Typography variant="h2"
        style={{
          fontSize,
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
        }}
      >
        {texts.heading}
      </Typography>
      <AppForm
        GridProps={{
          alignItems: 'center',
          justify: 'center',
        }}
      >
        <AppButton
          autoFocus
          buttonProps={{
            autoFocus: true,
            onClick: goToLogin,
          }}
        >
          {texts.loginButton}
        </AppButton>
        <AppButton
          buttonProps={{
            onClick: goToCreateUser,
            variant: 'outlined',
          }}
        >
          {texts.createUserButton}
        </AppButton>
      </AppForm>
    </Grid>
  );
};

export { Public };
