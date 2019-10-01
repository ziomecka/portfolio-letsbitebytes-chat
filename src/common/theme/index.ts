import { Theme } from '@material-ui/core';
import { breakpoints } from './breakpoints';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { overrides } from './overrides/';
import { palette } from './palette';
import { props } from './props/';
import { shape } from './shape';
import { typography } from './typography';

const getTheme = (): Theme => {
  const theme = createMuiTheme({
    breakpoints,
    palette,
    shape,
    typography,
  });

  return createMuiTheme({
    ...theme,
    overrides: overrides(theme),
    props,
  });
};

export { getTheme };
