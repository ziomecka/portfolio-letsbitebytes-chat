import * as React from 'react';
import { APP_TITLE } from '../../constants';
import { AppButton } from '../AppButton/';
import { AppRoutes } from '../../../common/constants';
import { Typography } from '@material-ui/core/';

const LOGIN_BUTTON_TEXT = 'Start chatting';
const Public: React.FunctionComponent<PublicWithRouterProps> = (props) => {
  const appTitle = APP_TITLE;
  const loginButtonText = LOGIN_BUTTON_TEXT;

  const goToLogin = (): void => {
    props.history.push(AppRoutes.loginRoute);
  };

  return (
    <React.Fragment>
      <Typography variant="h1">
        {appTitle}
      </Typography>
      <AppButton
        autoFocus
        buttonProps={{
          autoFocus: true,
          onClick: goToLogin,
        }}
      >
        {loginButtonText}
      </AppButton>
    </React.Fragment>
  );
};

export { Public };
