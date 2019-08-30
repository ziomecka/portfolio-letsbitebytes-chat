import * as React from 'react';
import {
  Button,
  Typography,
} from '@material-ui/core/';
import { AppRoutes } from '../../../common/constants';

const Public: React.FunctionComponent<PublicProps> = (props) => {
  const welcomeText = '';
  const loginButtonText = 'Login to application';

  const goToLogin = (): void => {
    // @ts-ignore
    props.history.push(AppRoutes.loginRoute);
  };

  return (
    <React.Fragment>
      <Typography>
        {welcomeText}
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
