import * as React from 'react';
import {
  Button,
  Typography,
} from '@material-ui/core';
import { Conversation } from '../Conversation/';

interface TraineeLocalState {
  message: string;
  needsHelp: boolean;
}

class Trainee extends React.Component<TraineeProps, TraineeLocalState> {
  private helpLabel: string;
  private resignLabel: string;
  private welcomeText: string;
  constructor ( props: TraineeProps ) {
    super( props );
    this.state = {
      message: '',
      needsHelp: true,
    };

    this.helpLabel = 'I need help';
    this.resignLabel = 'No, thanks';
    this.welcomeText = 'Welcome trainee';

    this.callTrainer = this.callTrainer.bind(this);
    this.typeMessage = this.typeMessage.bind(this);
  }

  public render (): JSX.Element {
    const { state: { needsHelp }, helpLabel, resignLabel } = this;

    return (
      <React.Fragment>
        <Typography>
          {this.welcomeText}
        </Typography>

        {needsHelp && <Conversation />}

        <Button
          onClick={this.callTrainer}
          variant="contained"
        >
          {needsHelp ? helpLabel : resignLabel}
        </Button>
        }
      </React.Fragment>
    );
  }

  private callTrainer (): void {
    this.setState({
      needsHelp: !this.state.needsHelp,
    });
  }

  private typeMessage ( event: React.ChangeEvent<HTMLInputElement> ): void {
    this.setState( {
      message: event.target.value,
    } );
  }
}

export { Trainee };
