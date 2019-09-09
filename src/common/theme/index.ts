import createMuiTheme, { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { Theme } from '@material-ui/core';
import { other } from './other';
import { palette } from './palette';
import { shape } from './shape';
import { typography } from './typography';

const getTheme = (): Theme => {
  return createMuiTheme({
    palette,
    shape,
    typography,
    ...other,
  } as ThemeOptions);
};

export { getTheme };
