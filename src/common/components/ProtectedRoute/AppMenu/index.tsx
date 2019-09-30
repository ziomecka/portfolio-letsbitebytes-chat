import * as React from 'react';
import * as ReactDom from 'react-dom';
import {
  Contacts,
  Logout,
} from '../../';
import { APP_MENU_ID } from '../../../constants';

export const AppMenu: React.FunctionComponent<{ isCompact: boolean }> = ({ isCompact }) => (
  ReactDom.createPortal(
    <React.Fragment>
      { isCompact && <Contacts /> }
      <Logout/>
    </React.Fragment>
    , document.getElementById(APP_MENU_ID)
  )
);
