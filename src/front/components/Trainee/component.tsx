import * as React from 'react';
import { Conversation } from '../Conversation/';

interface TraineeLocalState {
  message: string;
  needsHelp: boolean;
}

class Trainee extends React.Component<TraineeProps, TraineeLocalState> {
  constructor ( props: TraineeProps ) {
    super( props );
    this.state = {
      message: '',
      needsHelp: true,
    };
  }

  public render (): JSX.Element {
    return (
      <Conversation />
    );
  }
}

export { Trainee };
