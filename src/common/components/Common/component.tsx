/* eslint-disable no-global-assign */
import * as React from 'react';
import {
  AppDialog,
} from '../';
import {
  Grid,
  MuiThemeProvider,
  Paper,
  Typography,
} from '@material-ui/core';
import { APP_TITLE } from '../../constants';
import { Provider } from 'react-redux';
import { PublisherProvider } from 'publisher-subscriber-react-hoc';
import { getTheme } from '../../theme';
import { styles } from './styles';
import { withStyles } from '@material-ui/core/styles';

const windowObject = process.env.IS_BROWSER != 'true'
  ? {
    addEventListener: (): void => {},
    removeEventListener: (): void => {},
  }
  : window;

const Common: React.FunctionComponent<CommonProps> = ({
  children,
  classes,
  elevation = 0,
  login,
  appTitle = APP_TITLE,
  store,
}) => (
  <Provider store={store} >
    <MuiThemeProvider theme={ getTheme() }>
      {/*
      // @ts-ignore */}
      <PublisherProvider
        {...{
          emitter: windowObject,
          addListenerMethodName: 'addEventListener',
          removeListenerMethodName: 'removeEventListener',
        }}
      >
        <Grid
          container
          className={classes.rootBox}
          component={Paper}
          elevation={elevation}
          justify="center"
        >
          <Typography variant="h1">
            { `${ appTitle } ${ login && `, ${ login }!` }` }
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
        </Grid>
      </PublisherProvider>
    </MuiThemeProvider>
  </Provider>
);

const WrappedCommon = withStyles(styles)(Common);

export { WrappedCommon as Common };
