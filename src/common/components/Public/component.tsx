import * as React from 'react';
import {
  Button,
  Typography,
} from '@material-ui/core/';
import { APP_TITLE } from '../../constants';
import { AppRoutes } from '../../../common/constants';

const LOGIN_BUTTON_TEXT = 'Start chatting';
const Public: React.FunctionComponent<PublicProps> = (props) => {
  const appTitle = APP_TITLE;
  const loginButtonText = LOGIN_BUTTON_TEXT;

  const goToLogin = (): void => {
    // @ts-ignore
    props.history.push(AppRoutes.loginRoute);
  };

  return (
    <React.Fragment>
      <Typography variant="h1">
        {appTitle}
      </Typography>
      <Button
        onClick={goToLogin}
      >
        {loginButtonText}
      </Button>
    </React.Fragment>
  );
};

export { Public };
