import * as React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { styles } from './styles';
import { withStyles } from '@material-ui/styles';

const Users: React.FunctionComponent<UsersProps> =
({
  activeConversation,
  users,
  changeActiveConversation,
  classes,
}) => {

  const onClick = (login: string): ChangeConversationAction => (
    changeActiveConversation(login)
  );

  return (
    <List
      component={Box}
      classes={{ root: classes.scrollBar }}
    >
      {users.map(user => (
        <ListItem
          key={user}
          button={true}
          onClick={ (): ChangeConversationAction => onClick(user) }
          classes={{
            root: classes.listItem,
          }}
          selected={user === activeConversation}
        >
          <ListItemText
            primary={user}
            primaryTypographyProps={{
              classes: { root: classes.text },
            }}
          />
        </ListItem>
      ))}
    </List>
  );
};

const WrappedComponent = withStyles(styles)(Users);

export { WrappedComponent as Users };
