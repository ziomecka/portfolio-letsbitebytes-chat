import * as React from 'react';
import { BottomNavigation } from '@material-ui/core';
import { NotificationsButton } from '../';

const BottomNav: React.FunctionComponent = () => (
  <BottomNavigation>
    <NotificationsButton />
  </BottomNavigation>
);

export { BottomNav };
