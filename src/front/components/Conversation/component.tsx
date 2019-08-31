import * as React from 'react';
import {
  Button,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';

interface ConversationState {
  conversation: Statement[]
  message: string;
}

const PARTNER_STATEMENT_CLASS_NAME = 'BAR';
const USER_STATEMENT_CLASS_NAME = 'FOO';
const MESSAGE_INITIAL_STATE = '';

class Conversation extends React.Component<ConversationProps, ConversationState> {
  private conversationInputLabel: string;
  private messageInitialState: string;
  private partnerStatementClassName: string;
  private submitButtonLabel: string;
  private userStatementClassName: string;
  constructor (props: ConversationProps) {
    super(props);

    this.state = {
      conversation: this.getActiveConversation(),
      message: MESSAGE_INITIAL_STATE,
    };

    this.messageInitialState = MESSAGE_INITIAL_STATE;
    this.partnerStatementClassName = PARTNER_STATEMENT_CLASS_NAME;
    this.submitButtonLabel = 'Send';
    this.userStatementClassName = USER_STATEMENT_CLASS_NAME;
    this.conversationInputLabel = '?';

    this.typeMessage = this.typeMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  private getActiveConversation (conversations = this.props.conversations): Statement[] {
    const { activeConversation } = this.props;

    const conversation = Object.entries(conversations)
      .find(([key]) => key === activeConversation);

    return conversation ? conversation[ 1 ] : [];
  }

  public componentDidUpdate (prevProps: ConversationProps): void {
    const { activeConversation, conversations } = this.props;
    const { activeConversation: prevActiveConversation, conversations: prevConversations } = prevProps;

    if ( activeConversation && activeConversation !== prevActiveConversation ) {
      this.setState({
        conversation: this.getActiveConversation()
      });
    }

    if (conversations !== prevConversations) {
      const activeConversation = this.getActiveConversation();
      const { length: prevConversationLength } = this.getActiveConversation(prevConversations);

      if (activeConversation.length !== prevConversationLength) {
        this.setState({
          conversation: activeConversation,
        });
      }
    }
  }

  private renderConversation (): JSX.Element {
    const {
      partnerStatementClassName,
      userStatementClassName,
      state: { conversation = [] },
    } = this;

    return (
      <Paper>
        {
          conversation.map( ( statement, index ) => (
            <Paper
              key={index}
              className={
                statement[ 2 ]
                  ? userStatementClassName
                  : partnerStatementClassName
              }
            >
              <Typography>
                {statement[ 1 ]}
              </Typography>
            </Paper>
          ))
        }
      </Paper>
    );
  }

  private typeMessage (event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      message: event.target.value,
    });
  }

  private renderConversationInput (): JSX.Element {
    return (
      <Paper>
        <TextField
          label={this.conversationInputLabel}
          onChange={this.typeMessage}
          value={this.state.message}
        />
      </Paper>
    );
  }

  private renderSubmitButton (): JSX.Element {
    return (
      <Button
        onClick={this.sendMessage}
      >
        {this.submitButtonLabel}
      </Button>
    );
  }

  private async sendMessage (): Promise<void> {
    try {
      await this.props.emitMessage(this.state.message);

      this.setState({
        message: this.messageInitialState
      });
    } catch {
      console.log('Something went wrong'); // TODO
    }
  }

  public render (): JSX.Element {
    return (
      <React.Fragment>
        {this.renderConversation()}
        {this.renderConversationInput()}
        {this.renderSubmitButton()}
      </React.Fragment>
    );
  }
}

export { Conversation };