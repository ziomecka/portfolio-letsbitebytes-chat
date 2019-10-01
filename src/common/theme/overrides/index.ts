import { AppBar } from './AppBar';
import { BottomNavigation } from './BottomNavigation';
import { Box } from './Box';
import { Button } from './Button';
import { Dialog } from './Dialog';
import { FormHelperText } from './FormHelperText';
import { IconButton } from './IconButton';
import { Input } from './Input';
import { List } from './List';
import { Overrides } from '@material-ui/core/styles/overrides';
import { Paper } from './Paper';
import { Theme } from '@material-ui/core';
import { TouchRipple } from './TouchRipple';
import { Typography } from './Typography';
import themeConstants from './constants';

const overrides = (theme: Theme): Overrides => {
  const { spacing } = theme;

  const smallSpacing = spacing(themeConstants.SMALL_SPACING);
  const regularSpacing = spacing(themeConstants.REGULAR_SPACING);
  const largeSpacing = spacing(themeConstants.LARGE_SPACING);

  const appTheme = Object.assign(theme, {
    smallSpacing,
    regularSpacing,
    largeSpacing,
    appNavHeight: themeConstants.APP_NAV_HEIGHT,
  });

  return {
    ...AppBar(appTheme),
    ...BottomNavigation(appTheme),
    ...Box(),
    ...Button(appTheme),
    ...Dialog(appTheme),
    ...FormHelperText(),
    ...IconButton(),
    ...Input(appTheme),
    ...List(appTheme),
    ...Paper(appTheme),
    ...TouchRipple(),
    ...Typography(appTheme),
  };
};

export { overrides };
