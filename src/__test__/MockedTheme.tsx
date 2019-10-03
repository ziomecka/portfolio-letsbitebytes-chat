import * as React from 'react';
import {
  Theme,
  createMuiTheme,
} from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core';

export const MockedTheme: React.FunctionComponent<{ theme?: Theme }> = ({
  children,
  theme,
}) => (
  <MuiThemeProvider theme={createMuiTheme(theme)}>
    { children }
  </MuiThemeProvider>
);
