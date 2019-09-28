import * as React from 'react';
import {
  BottomNavigation,
  CircularProgress,
  Grid,
} from '@material-ui/core';
import {
  Helper,
  NotificationsButton,
} from '../';
import { FORM_HELPER_TEXT_MAX_WIDTH } from '../../theme/other-constants';

const Box: React.FunctionComponent<{ style?: CSSProperties }> = ({
  children,
  style = {},
}): JSX.Element => (
  <Grid
    container
    item
    alignContent="center"
    // minWidth of 1px to avoid jumping of elements
    style={{
      height: '100%',
      minWidth: '1px',
      width: 'auto',
      ...style,
    }}
  >
    {children}
  </Grid>
);

const BottomNav: React.FunctionComponent<BottomNavProps> = ({ waitForServer }) => (
  <BottomNavigation>
    <Box>
      { waitForServer && (
        <CircularProgress
          color="secondary"
          variant="indeterminate"
        />
      )}
    </Box>
    <Box style={{ maxWidth: FORM_HELPER_TEXT_MAX_WIDTH }}>
      <Helper/>
    </Box>
    <Box>
      <NotificationsButton />
    </Box>
  </BottomNavigation>
);

export { BottomNav };
