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

const Box: React.FunctionComponent = ({ children }): JSX.Element => (
  <Grid
    container
    item
    alignContent="center"
    // minWidth of 1px to avoid jumping of elements
    style={{
      height: '100%',
      minWidth: '1px',
      width: 'auto',
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
    <Box>
      <Helper/>
    </Box>
    <Box>
      <NotificationsButton />
    </Box>
  </BottomNavigation>
);

export { BottomNav };
