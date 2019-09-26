import * as React from 'react';
import {
  Box,
  Grid,
} from '@material-ui/core';
import {
  Conversation,
  Socket,
  Users,
  withAppSize,
} from '../';
import {
  Redirect,
  Route,
} from 'react-router-dom';
import { AppMenu } from './AppMenu/';
import { styles } from './styles';
import { withStyles } from '@material-ui/styles/';

const ProtectedRoute: React.FunctionComponent<ProtectedRouteProps> =
({
  appSize,
  classes,
  isAuthenticated,
  path,
}) => {
  const isCompact = appSize === AppSize.compact;

  const renderComponent = (): JSX.Element => (
    isAuthenticated ? (
      <Grid
        container
        className={classes.box}
        component={Box}
        justify="space-between"
      >
        { !isCompact && <Users />}
        <AppMenu isCompact={isCompact} />
        <Conversation />
        <Socket />
      </Grid>
    ) : (
      <Redirect to={{ pathname: '', state: {} }}/>
    )
  );

  return (
    <Route exact path={path} render={renderComponent} />
  );
};

const WrappedComponent = withStyles(styles)(withAppSize(ProtectedRoute));
export { WrappedComponent as ProtectedRoute };
