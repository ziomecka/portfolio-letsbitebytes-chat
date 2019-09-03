import * as React from 'react';
import {
  MuiThemeProvider,
  Paper,
} from '@material-ui/core';
import { AppRoutes } from './constants';
import { Public } from './components/';
import { Route } from 'react-router-dom';
import { getTheme } from './theme/';

const Common: React.FunctionComponent = (props) => (
  // @ts-ignore
  <MuiThemeProvider theme={ getTheme() }>
    <Paper>
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

export { Common };