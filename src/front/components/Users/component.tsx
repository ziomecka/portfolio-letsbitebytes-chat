import * as React from 'react';
import {
  Box,
  Paper,
  Typography,
} from '@material-ui/core';

export const Users: React.FunctionComponent<UsersProps> = ({ users, changeActiveConversation }) => {
  const onClick = (login: string): ChangeConversationAction => {
    return changeActiveConversation(login);
  };

  return (
    <Paper>
      {users.map(user => (
        <Box
          key={ user }
          onClick={(): ChangeConversationAction => onClick(user)}
        >
          <Typography variant="body1">
            {user}
          </Typography>
        </Box>
      ))}
    </Paper>
  );
};
