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


const WrappedCommon = withStyles(styles)(Common);

export { WrappedCommon as Common };
