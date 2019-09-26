import * as React from 'react';
import {
  ListItem,
  List as MuiList,
} from '@material-ui/core';
import { ChatBox } from '../../';
import { USERS_WIDTH } from '../../../theme/other-constants';
import { renderUsersList } from '../renderUsersList/';

const List: React.FunctionComponent<Partial<UsersProps>> =
({
  classes,
  users,
  activeConversation,
  changeActiveConversation,
}) => {

  const onListItemClick = (login: string): void => {
    changeActiveConversation(login);
  };

  return (
    <ChatBox
      heading="Users"
      containedHeading={true}
      GridProps={{ style: {
        width: USERS_WIDTH,
        paddingLeft: 0,
        paddingRight: 0,
      } }}
    >
      <MuiList classes={{ root: classes.scrollBar }}>
        {
          renderUsersList({
            Component: ListItem,
            activeConversation,
            onClick: onListItemClick,
            users,
            classes,
          })
        }
      </MuiList>
    </ChatBox>
  );
};

export { List };
