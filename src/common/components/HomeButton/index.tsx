import * as React from 'react';
import * as ReactDom from 'react-dom';
import { APP_MENU_ID } from '../../constants';
import { Home } from '@material-ui/icons';
import { RouterButton } from '../';

export const HomeButton = (): JSX.Element => (
  <React.Fragment>
    {ReactDom.createPortal(
      <RouterButton
        to={AppRoutes.publicRoute}
        icon={true}
      >
        <Home />
      </RouterButton>
      , document.getElementById(APP_MENU_ID)
    )}
  </React.Fragment>
);
