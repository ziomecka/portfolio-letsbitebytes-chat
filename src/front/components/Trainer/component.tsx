import * as React from 'react';
import { Conversation } from '../Conversation/';
import { Screen } from '../Screen/';
import { Typography } from '@material-ui/core';

const Trainer: React.FunctionComponent = () => {
  const welcomeText = 'Welcome Trainer';

  return (
    <Screen>
      <Typography>
        {welcomeText}
      </Typography>
      <Conversation />
    </Screen>
  );
};

export { Trainer };
