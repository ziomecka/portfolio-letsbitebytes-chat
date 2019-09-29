import * as React from 'react';
import {
  IconButton,
  MenuItem,
  Menu as MuiMenu,
} from '@material-ui/core';
import {
  MENU_MAX_HEIGHT,
  MENU_WIDTH,
} from '../../../theme/other-constants';
import { APP_MENU_ID } from '../../../constants';
import PersonIcon from '@material-ui/icons/Person';
import { renderContactsList } from '../renderContactsList/';

const ICON_TITLE = 'Contacts';

const Menu: React.FunctionComponent<Partial<ContactsProps>> = ({
  activeConversation,
  changeActiveConversation,
  classes,
  contacts,
}) => {

  const [ anchorElement, setAnchorElement ] = React.useState(null);
  const open = Boolean(anchorElement);

  const onMenuItemClick = (login: string): void => {
    changeActiveConversation(login);
    setAnchorElement(null);
  };

  const onIconClick = (): void => {
    setAnchorElement(document.getElementById(APP_MENU_ID));
  };

  const onClose = (): void => setAnchorElement(null);

  return (
    <div style={{ display: 'inline-block' }}>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={onIconClick}
        classes={{ root: classes.button }}
        title={ICON_TITLE}
      >
        <PersonIcon />
      </IconButton>
      <MuiMenu
        id="long-menu"
        anchorEl={anchorElement}
        keepMounted
        open={open}
        onClose={onClose}
        PaperProps={{
          classes: { root: classes.scrollBar },
          style: {
            maxHeight: MENU_MAX_HEIGHT,
            width: MENU_WIDTH,
          },
        }}
      >
        {
          renderContactsList({
            Component: MenuItem,
            onClick: onMenuItemClick,
            contacts,
            activeConversation,
            classes,
          })
        }
      </MuiMenu>
    </div>
  );
};

export { Menu };
