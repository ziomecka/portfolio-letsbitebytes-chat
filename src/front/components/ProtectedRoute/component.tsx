import * as React from 'react';
import {
  Paper,
  Typography,
} from '@material-ui/core';
import { APP_TITLE } from '../../../common/constants';
import { Logout } from '../Logout/';
import { Redirect } from 'react-router-dom';
import { Screen } from '../Screen/';
import { Socket } from '../Socket/';
import { Trainee } from '../Trainee/';
import { Trainer } from '../Trainer/';

const LOGGED_AS_LABEL = 'You are logged as';

export const ProtectedRoute: React.FunctionComponent<ProtectedRouteProps> = ( { isAuthenticated, login, role } ) => {
  const appTitle = APP_TITLE;
  const loggedAsLabel = LOGGED_AS_LABEL;

  // TODO style instead of using variants
  return (
    isAuthenticated
      ? (
        <Screen>
          <Paper>
            <Typography variant="h5">
              { appTitle }
            </Typography>
            <Typography variant="h6">
              { `${ loggedAsLabel } ${ login }` }
            </Typography>
          </Paper>
          <Paper>
            { role === UserRole.trainer
              ? <Trainer/>
              : <Trainee/> // TODO
            }
          </Paper>
          <Paper>
            <Logout/>
          </Paper>
          <Socket />
        </Screen>
      )
      : <Redirect to={{ pathname: '', state: {} }} />
  );
};
