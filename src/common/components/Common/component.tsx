/* eslint-disable no-global-assign */
import * as React from 'react';
import {
  AppDialog,
  AppNav,
  AppSizeProvider,
  NotificationsButton,
} from '../';
import {
  BottomNavigation,
  Grid,
  MuiThemeProvider,
  Paper,
} from '@material-ui/core';
import { APP_ROOT_ID } from '../../constants';
import { Provider } from 'react-redux';
import { getTheme } from '../../theme';
import { styles } from './styles';
import { withStyles } from '@material-ui/core/styles';

const { IS_BROWSER } = process.env;

const Common: React.FunctionComponent<CommonProps> = ({
  children,
  classes,
  elevation = 1,
  store,
}) => (
  <Provider store={store}>
    <MuiThemeProvider theme={ getTheme() }>
      <AppSizeProvider>
        <Grid
          container
          className={classes.rootBox}
          component={Paper}
          elevation={elevation}
          justify="center"
          id={APP_ROOT_ID}
        >
          <AppNav />
          { children }
          <BottomNavigation>
            { IS_BROWSER && <NotificationsButton /> }
          </BottomNavigation>
          <AppDialog />
        </Grid>
      </AppSizeProvider>
    </MuiThemeProvider>
  </Provider>
);

const WrappedComponent = withStyles(styles)(Common);

export { WrappedComponent as Common };
