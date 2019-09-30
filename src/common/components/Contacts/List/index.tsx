import * as React from 'react';
import {
  ListItem,
  List as MuiList,
} from '@material-ui/core';
import { ChatBox } from '../../';
import { USERS_WIDTH } from '../../../theme/other-constants';
import { renderContactsList } from '../renderContactsList/';

const List: React.FunctionComponent<Partial<ContactsProps>> =
({
  classes,
  contacts,
  activeConversation,
  changeActiveConversation,
}) => {

  const onListItemClick = (login: string): void => {
    changeActiveConversation(login);
  };

  return (
    <ChatBox
      heading="Contacts"
      boldHeading={true}
      GridProps={{ style: {
        width: USERS_WIDTH,
        paddingLeft: 0,
        paddingRight: 0,
      } }}
    >
      <MuiList classes={{ root: classes.scrollBar }}>
        {
          renderContactsList({
            Component: ListItem,
            activeConversation,
            onClick: onListItemClick,
            contacts,
            classes,
          })
        }
      </MuiList>
    </ChatBox>
  );
};

export { List };
