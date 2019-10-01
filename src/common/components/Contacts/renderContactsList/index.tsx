import * as React from 'react';
import { ListItemProps } from '@material-ui/core/ListItem';
import { ListItemText } from '@material-ui/core';
import { MenuItemProps } from '@material-ui/core/MenuItem';

interface RenderContactsListProps {
  Component: React.FunctionComponent<Partial<MenuItemProps | ListItemProps>>,
  onClick: (value: string) => void,
  contacts: ContactsState,
  activeConversation: string,
  classes: Record<string, string>,
}

export const renderContactsList = ({
  Component,
  onClick,
  contacts,
  activeConversation,
  classes,
}: RenderContactsListProps): JSX.Element[] => {

  return Array.from(contacts).map(([ contact, { isActive } ]: [string, ContactState]) => {
    const selected = contact === activeConversation;

    return (
      <Component
        key={contact}
        button={true}
        onClick={(): void => onClick(contact)}
        selected={selected}
        className={classes.text}
      >
        <ListItemText primary={contact}/>
      </Component>
    );
  });
};

