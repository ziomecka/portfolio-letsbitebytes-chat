import * as React from 'react';
import {
  Box,
  Typography,
} from '@material-ui/core';
import { Logout } from '../Logout/';
import { Redirect } from 'react-router-dom';
import { Screen } from '../Screen/';
import { Socket } from '../Socket/';
import { Trainee } from '../Trainee/';
import { Trainer } from '../Trainer/';
import { Users } from '../Users/';

const LOGGED_AS_LABEL = 'Welcome';

export const ProtectedRoute: React.FunctionComponent<ProtectedRouteProps> =
  ({ isAuthenticated, login, role }) => {
    const loggedAsLabel = LOGGED_AS_LABEL;

    return (
      isAuthenticated
        ? (
          <Screen>
            <Box>
              <Typography variant="h2">
                { `${ loggedAsLabel } ${ login }` }
              </Typography>
            </Box>
            <Box>
              { role === UserRole.trainer
                ? <Trainer/>
                : <Trainee/> // TODO
              }
              <Users />
            </Box>
            <Box>
              <Logout/>
            </Box>
            <Socket />
          </Screen>
        )
        : <Redirect to={{ pathname: '', state: {} }} />
    );
  };
