import * as React from 'react';
import {
  MuiThemeProvider,
  Paper,
  Typography,
} from '@material-ui/core';
import { APP_TITLE } from './constants';
import { getTheme } from './theme/';
import { styles } from './styles';
import { withStyles } from '@material-ui/core/styles';

const Common: React.FunctionComponent<CommonProps> = (props) => {
  const appTitle = APP_TITLE;

  return (
    <MuiThemeProvider theme={ getTheme() }>
      <Paper className={props.classes.root}>
        <Typography variant="h1">
          { appTitle }
        </Typography>
        { props.children }
      </Paper>
    </MuiThemeProvider>
  );
};

export {
  WINDOW_INITIAL_STATE,
  HTML_ROOT_ID,
  PRODUCTION_URL,
  SSR_STYLE_ROOT_ID,
  AppRoutes,
} from './constants';

const StyledCommon = withStyles(styles)(Common);

export { AppButton, Public } from './components/';
export { StyledCommon as Common };
