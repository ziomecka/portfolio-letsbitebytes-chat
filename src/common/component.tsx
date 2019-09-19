import * as React from 'react';
import {
  Grid,
  MuiThemeProvider,
  Paper,
  Typography,
} from '@material-ui/core';
import { APP_TITLE } from './constants';
import { getTheme } from './theme/';
import { styles } from './styles';
import { withStyles } from '@material-ui/core/styles';

const Common: React.FunctionComponent<CommonProps> = ({
  children,
  classes,
  elevation = 0,
  login,
  appTitle = APP_TITLE,
}) => (
  <MuiThemeProvider theme={ getTheme() }>
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
    </Grid>
  </MuiThemeProvider>
);

const WrappedCommon = withStyles(styles)(Common);

export { WrappedCommon as Common };
