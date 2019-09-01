import * as React from 'react';
import { Conversation } from '../Conversation/';
import { Typography } from '@material-ui/core';

const Trainer: React.FunctionComponent = () => {
  const welcomeText = 'Welcome Trainer';

  return (
    <React.Fragment>
      <Typography>
        {welcomeText}
      </Typography>
      <Conversation />
    </React.Fragment>
  );
};

export { Trainer };
