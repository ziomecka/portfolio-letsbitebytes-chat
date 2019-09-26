/* eslint-disable no-global-assign */
import * as React from 'react';
import {
  AppDialog,
  AppSizeProvider,
  NotificationsButton,
} from '../';
import {
  Grid,
  MuiThemeProvider,
  Paper,
  Typography,
} from '@material-ui/core';
import { APP_TITLE } from '../../constants';
import { Provider } from 'react-redux';
import { getTheme } from '../../theme';
import { styles } from './styles';
import { withStyles } from '@material-ui/core/styles';

const Common: React.FunctionComponent<CommonProps> = ({
  children,
  classes,
  elevation = 1,
  login,
  appTitle = APP_TITLE,
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
        <Typography variant="h1">
          { `${ appTitle }${ login && `, ${ login }!` }` }
        </Typography>
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          classes={{ root: classes.box }}
        >
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
