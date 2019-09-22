import * as React from 'react';
import {
  Box,
  Grid,
  Paper,
} from '@material-ui/core';
import { Conversation } from '../Conversation/';
import { Logout } from '../Logout/';
import { Redirect } from 'react-router-dom';
import { Socket } from '../Socket/';
import { Users } from '../Users/';
import { styles } from './styles';
import { withStyles } from '@material-ui/styles/';

const ProtectedRoute: React.FunctionComponent<ProtectedRouteProps> =
({
  isAuthenticated,
  classes,
  elevation = 0,
}) => {
  return (isAuthenticated ? (
    <Grid
      container
      justify="space-between"
      component={Paper}
      elevation={elevation}
    >
      <Grid
        item
        component={Box}
        className={classes.box}
        xs={4}
      >
        <Users />
      </Grid>
      <Grid
        item
        component={Box}
        className={classes.box}
        xs={7}
      >
        <Conversation />
      </Grid>
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.buttonsBox}
      >
        <Logout/>
      </Grid>
      <Socket />
    </Grid>
  ) : (
    <Redirect to={{ pathname: '', state: {} }}/>
  ));
};

const WrappedComponent = withStyles(styles)(ProtectedRoute);
export { WrappedComponent as ProtectedRoute };
