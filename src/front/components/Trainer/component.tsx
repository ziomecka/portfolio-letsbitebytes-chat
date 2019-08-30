import * as React from 'react';
import { Conversations } from '../Conversations/';
import { Typography } from '@material-ui/core';

const Trainer: React.FunctionComponent = () => {
  const welcomeText = 'Welcome Trainer';

  return (
    <React.Fragment>
      <Typography>
        {welcomeText}
      </Typography>
      <Conversations />
    </React.Fragment>
  );
};

export { Trainer };
