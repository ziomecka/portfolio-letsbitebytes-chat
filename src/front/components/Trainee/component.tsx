import * as React from 'react';
import { Conversation } from '../Conversation/';
import { Typography } from '@material-ui/core';

interface TraineeLocalState {
  message: string;
  needsHelp: boolean;
}

class Trainee extends React.Component<TraineeProps, TraineeLocalState> {
  private welcomeText: string;
  constructor ( props: TraineeProps ) {
    super( props );
    this.state = {
      message: '',
      needsHelp: true,
    };

    this.welcomeText = 'Welcome trainee';
  }

  public render (): JSX.Element {
    return (
      <React.Fragment>
        <Typography>
          {this.welcomeText}
        </Typography>
        <Conversation />
      </React.Fragment>
    );
  }
}

export { Trainee };
