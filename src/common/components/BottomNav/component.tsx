import * as React from 'react';
import {
  BottomNavigation,
  CircularProgress,
} from '@material-ui/core';
import { NotificationsButton } from '../';

const BottomNav: React.FunctionComponent<BottomNavProps> = ({ waitForServer }) => (
  <BottomNavigation>
    <div style={{ display: 'inline-block', minHeight: '1px', minWidth: '1px' }}>
      { waitForServer && (
        <CircularProgress
          color="secondary"
          variant="indeterminate"
        />
      )}
    </div>
    <NotificationsButton />
  </BottomNavigation>
);

export { BottomNav };
