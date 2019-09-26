import * as React from 'react';
import { List } from './List/';
import { Menu } from './Menu/';
import { styles } from './styles';
import { withAppSize } from '../';
import { withStyles } from '@material-ui/styles';

const Users: React.FunctionComponent<UsersProps> =
({
  appSize,
  activeConversation,
  users,
  changeActiveConversation,
  classes,
}) => {

  const isCompact = appSize === AppSize.compact;

  return (
    (
      users && users.length && (
        isCompact &&
          <Menu
            activeConversation={activeConversation}
            changeActiveConversation={changeActiveConversation}
            classes={classes}
            users={users}
          />
        || (
          <List
            activeConversation={activeConversation}
            changeActiveConversation={changeActiveConversation}
            classes={classes}
            users={users}
          />
        )
      ) || null
    )
  );
};

const WrappedComponent = withStyles(styles)(withAppSize(Users));

export { WrappedComponent as Users };
