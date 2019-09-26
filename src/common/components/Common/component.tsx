/* eslint-disable no-global-assign */
import * as React from 'react';
import {
  AppDialog,
  AppSizeProvider,
  NotificationsButton,
  AppNav,
} from '../';
import {
  Grid,
  MuiThemeProvider,
  Paper,
} from '@material-ui/core';
import { Provider } from 'react-redux';
import { getTheme } from '../../theme';
import { styles } from './styles';
import { withStyles } from '@material-ui/core/styles';

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
      >
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          classes={{ root: classes.box }}
        >
          <AppNav />
          { children }
        </Grid>
        <AppDialog />
        <NotificationsButton />
      </Grid>
      </AppSizeProvider>
    </MuiThemeProvider>
  </Provider>
);

const WrappedCommon = withStyles(styles)(Common);

export { WrappedCommon as Common };
