import * as React from 'react';
import {
  Paper,
  TextField,
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
  private userStatementClassName: string;
  constructor (props: ConversationProps) {
    super(props);

    this.state = {
      conversation: this.getActiveConversation(),
      message: MESSAGE_INITIAL_STATE,
    };

    this.messageInitialState = MESSAGE_INITIAL_STATE;
    this.partnerStatementClassName = PARTNER_STATEMENT_CLASS_NAME;
    this.userStatementClassName = USER_STATEMENT_CLASS_NAME;
    this.conversationInputLabel = '?';

    this.typeMessage = this.typeMessage.bind(this);
  }

  private getActiveConversation (): Statement[] {
    const { activeConversation } = this.props;

    const conversation = Object.entries(this.props.conversations)
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

  private renderConversation (conversation: Statement[]): JSX.Element {
    const {
      partnerStatementClassName,
      userStatementClassName,
    } = this;

    return (
      <Paper>
          {
            conversation.map( ( statement, index ) => (
              <div
                key={index}
                className={
                  statement[ 2 ]
                    ? userStatementClassName
                    : partnerStatementClassName
                }
              >
                <p>{statement[ 0 ]}</p>
                <p>{statement[ 1 ]}</p>
              </div>
            ) )
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

  public render (): JSX.Element {
    const { conversation } = this.state;

    return (
      conversation &&
      <React.Fragment>
        {this.renderConversation(conversation)}
        {this.renderConversationInput()}
      </React.Fragment>
    ) || null;
  }
}

export { Conversation };