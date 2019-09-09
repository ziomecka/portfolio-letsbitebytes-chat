import { Theme } from '@material-ui/core';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { other } from './other';
import { palette } from './palette';
import { shape } from './shape';
import { typography } from './typography';

const getTheme = (): Theme => {
  const theme = createMuiTheme({
    palette,
    shape,
    typography,
  });

  return createMuiTheme({
    ...theme,
    ...other(theme),
  });
};

export { getTheme };
