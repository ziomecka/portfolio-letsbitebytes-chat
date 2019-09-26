import * as React from 'react';
import { ListItemProps } from '@material-ui/core/ListItem';
import { ListItemText } from '@material-ui/core';
import { MenuItemProps } from '@material-ui/core/MenuItem';

interface RenderUsersListProps {
  Component: React.FunctionComponent<Partial<MenuItemProps | ListItemProps>>,
  onClick: (value: string) => void,
  users: string[],
  activeConversation: string,
  classes: Record<string, string>,
}

export const renderUsersList = ({
  Component,
  onClick,
  users,
  activeConversation,
  classes,
}: RenderUsersListProps): JSX.Element[] => (
  users.map(user => (
    <Component
      key={user}
      button={true}
      onClick={(): void => onClick(user)}
      selected={user === activeConversation}
      className={classes.text}
    >
      <ListItemText
        primary={user}
        primaryTypographyProps={{
          classes: { root: classes.text },
        }}
      />
    </Component>
  ))
);
