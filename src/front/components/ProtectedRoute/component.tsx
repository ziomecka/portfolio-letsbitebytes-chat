import * as React from 'react';
import { Logout } from '../Logout/';
import { Paper } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { Screen } from '../Screen/';
import { Socket } from '../Socket/';
import { Trainee } from '../Trainee/';
import { Trainer } from '../Trainer/';

export const ProtectedRoute: React.FunctionComponent<ProtectedRouteProps> = ( { isAuthenticated, role } ) => (
  isAuthenticated
    ? (
      <Screen>
        <Paper>
          <Logout/>
        </Paper>
        { role === UserRole.trainer
          ? <Trainer/>
          : <Trainee/> // TODO
        }
        <Socket />
      </Screen>
    )
    : <Redirect to={{ pathname: '', state: {} }} />
);
