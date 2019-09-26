/* eslint-disable no-global-assign */
import * as React from 'react';
import {
  APP_MENU_ID,
  APP_TITLE,
} from '../../constants';
import {
  AppBar,
  Typography,
} from '@material-ui/core';
import { styles } from './styles';
import { withStyles } from '@material-ui/styles';

const AppNav: React.FunctionComponent<AppNavProps> = ({
  appTitle = APP_TITLE,
  classes,
  login,
}) => (
  <AppBar position="absolute">
    <Typography variant="h1">
      { `${ appTitle }${ login && `, ${ login }!` }` }
    </Typography>
    <div id={APP_MENU_ID} className={classes.menu}></div>
  </AppBar>
);

const WrappedComponent = withStyles(styles)(AppNav);

export { WrappedComponent as AppNav };
