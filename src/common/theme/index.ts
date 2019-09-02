import { Theme } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { other } from './other';
import { palette } from './palette';
import { typography } from './typography';

const getTheme = (): Theme => {
  // @ts-ignore
  return createMuiTheme({
    palette,
    typography,
    ...other,
  });
};

export { getTheme };
