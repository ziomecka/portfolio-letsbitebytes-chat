import * as React from 'react';
import { AppRoutes } from './constants';
import { Paper } from '@material-ui/core';
import { Public } from './components/';
import { Route } from 'react-router-dom';

const PaperStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
};

const Common: React.FunctionComponent = (props) => (
  // @ts-ignore
  <Paper style={PaperStyle}>
    <Route exact path={AppRoutes.publicRoute} component={Public}/>
    { props.children }
  </Paper>
);

export {
  WINDOW_INITIAL_STATE,
  HTML_ROOT_ID,
  AppRoutes,
} from './constants';

export { Common };