import * as React from 'react';
import {
  MuiThemeProvider,
  Paper,
} from '@material-ui/core';
import { AppRoutes } from './constants';
import { Public } from './components/';
import { Route } from 'react-router-dom';
import { getTheme } from './theme/';
import { styles } from './styles';
import { withStyles } from '@material-ui/core/styles';

const Common: React.FunctionComponent<CommonProps> = (props) => (
  // @ts-ignore
  <MuiThemeProvider theme={ getTheme() }>
    <Paper className={props.classes.root}>
      <Route exact path={AppRoutes.publicRoute} component={Public}/>
      { props.children }
    </Paper>
  </MuiThemeProvider>
);

export {
  WINDOW_INITIAL_STATE,
  HTML_ROOT_ID,
  AppRoutes,
} from './constants';

const StyledCommon = withStyles(styles)(Common);

export { StyledCommon as Common };