import * as React from 'react';
import { List } from './List/';
import { Menu } from './Menu/';
import { styles } from './styles';
import { withAppSize } from '../';
import { withStyles } from '@material-ui/styles';

const Contacts: React.FunctionComponent<ContactsProps> =
({
  appSize,
  activeConversation,
  contacts,
  changeActiveConversation,
  classes,
}) => {

  const isCompact = appSize === AppSize.compact;

  return (
    (
      contacts && !!contacts.size && (
        isCompact &&
          <Menu
            activeConversation={activeConversation}
            changeActiveConversation={changeActiveConversation}
            classes={classes}
            contacts={contacts}
          />
        || (
          <List
            activeConversation={activeConversation}
            changeActiveConversation={changeActiveConversation}
            classes={classes}
            contacts={contacts}
          />
        )
      ) || null
    )
  );
};

const WrappedComponent = withStyles(styles)(withAppSize(Contacts));

export { WrappedComponent as Contacts };
