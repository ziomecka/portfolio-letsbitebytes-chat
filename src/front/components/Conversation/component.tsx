import * as React from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
} from '@material-ui/core';

interface ConversationState {
  conversation: Statement[]
  message: string;
}

const CONVERSATION_INPUT_LABEL = 'What would you like to say?';
const MESSAGE_INITIAL_STATE = '';
const PARTNER_STATEMENT_CLASS_NAME = 'BAR';
const SUBMIT_BUTTON_LABEL = 'Send';
const USER_STATEMENT_CLASS_NAME = 'FOO';

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
    this.submitButtonLabel = SUBMIT_BUTTON_LABEL;
    this.userStatementClassName = USER_STATEMENT_CLASS_NAME;
    this.conversationInputLabel = CONVERSATION_INPUT_LABEL;

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
      const { length: prevLength } = this.state.conversation;

      if (activeConversation.length !== prevLength || !prevLength) {
        this.setState({
          conversation: [...activeConversation],
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
      <Box>
        {
          conversation.map( ( statement, index ) => (
            <Box
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
            </Box>
          ))
        }
      </Box>
    );
  }

  private typeMessage (event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      message: event.target.value,
    });
  }

  private renderConversationInput (): JSX.Element {
    return (
      <Box>
        <TextField
          onChange={this.typeMessage}
          placeholder={this.conversationInputLabel}
          value={this.state.message}
        />
      </Box>
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