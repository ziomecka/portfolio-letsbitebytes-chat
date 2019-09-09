import * as React from 'react';
import {
  Box,
  TextField,
  Typography,
} from '@material-ui/core';
import { AppButton } from '../../../common';
import { styles } from './styles';
import { withPublisher } from 'publisher-subscriber-react-hoc';
import { withStyles } from '@material-ui/styles';

interface ConversationState {
  conversation: Statement[]
  message: string;
}

const CONVERSATION_INPUT_LABEL = 'What would you like to say?';
const MESSAGE_INITIAL_STATE = '';
const SUBMIT_BUTTON_LABEL = 'Send';
const TALKING_WITH_DESCRIPTION = 'You are talking with';

class Conversation extends React.Component<ConversationProps, ConversationState> {
  private conversationInputLabel: string;
  private keyboardEvent: string;
  private messageInitialState: string;
  private submitButtonLabel: string;
  private talkingWithDescription: string;
  private unsubscribe: () => void;

  private conversationBoxClassName: string;
  private partnerTypographyClassName: string;
  private userTypographyClassName: string;
  private typographyBoxClassName: string;
  private typographyClassName: string;
  constructor (props: ConversationProps) {
    super(props);

    this.state = {
      conversation: this.getActiveConversation(),
      message: MESSAGE_INITIAL_STATE,
    };

    this.messageInitialState = MESSAGE_INITIAL_STATE;
    this.submitButtonLabel = SUBMIT_BUTTON_LABEL;
    this.conversationInputLabel = CONVERSATION_INPUT_LABEL;
    this.talkingWithDescription = TALKING_WITH_DESCRIPTION;

    this.setClassNames();

    this.typeMessage = this.typeMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.sendMessageOnEnter = this.sendMessageOnEnter.bind(this);

    this.keyboardEvent = 'keydown';
    this.unsubscribe = props.subscribe(this.keyboardEvent, this.sendMessageOnEnter);
  }

  private setClassNames (): void {
    const { classes: {
      box,
      conversationBox,
      partnerTypography,
      userTypography,
      typography,
      typographyBox,
    } } = this.props;

    this.conversationBoxClassName = conversationBox;
    this.partnerTypographyClassName = `${ box } ${ partnerTypography }`;
    this.userTypographyClassName = `${ box } ${ userTypography }`;
    this.typographyBoxClassName = typographyBox;
    this.typographyClassName = typography;
  }

  private getActiveConversation (conversations = this.props.conversations): Statement[] {
    const { activeConversation } = this.props;

    const conversation = Object.entries(conversations)
      .find(([key]) => key === activeConversation);

    return conversation ? conversation[ 1 ] : [];
  }

  public componentDidUpdate (prevProps: ConversationProps): void {
    const { activeConversation, conversations } = this.props;
    const {
      activeConversation: prevActiveConversation,
      conversations: prevConversations,
    } = prevProps;

    if (activeConversation && activeConversation !== prevActiveConversation) {
      this.setState({
        conversation: this.getActiveConversation(),
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

  public componentWillUnmount (): void {
    this.unsubscribe();
  }

  private renderConversation (): JSX.Element {
    const {
      conversationBoxClassName,
      partnerTypographyClassName,
      typographyBoxClassName,
      typographyClassName,
      userTypographyClassName,
      state: { conversation = [] },
    } = this;

    return (
      <Box className={ conversationBoxClassName }>
        { conversation.map((statement, index) => {
          const isUser = statement[ 2 ];
          const typoClassName =
            `${ typographyClassName } ${
              isUser ? userTypographyClassName : partnerTypographyClassName
            }`;

          return (
            <Box key={index} className={ typographyBoxClassName }>
              <Typography className={ typoClassName }>
                {statement[ 1 ]}
              </Typography>
            </Box>
          );
        }) }
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
          autoFocus
          onChange={this.typeMessage}
          placeholder={this.conversationInputLabel}
          value={this.state.message}
        />
      </Box>
    );
  }

  private renderSubmitButton (): JSX.Element {
    return (
      <AppButton
        buttonProps={{
          onClick: this.sendMessage,
        }}
      >
        {this.submitButtonLabel}
      </AppButton>
    );
  }

  private async sendMessage (): Promise<void> {
    try {
      await this.props.emitMessage(this.state.message);

      this.setState({
        message: this.messageInitialState,
      });
    } catch {
      // TODO
      console.log('Something went wrong'); // eslint-disable-line no-console
    }
  }

  // TODO async
  private sendMessageOnEnter (event: React.KeyboardEvent<HTMLFormElement>): void {
    if (event.key.toLowerCase() === 'enter') {
      this.sendMessage();
    }
  }

  public render (): JSX.Element {
    return (
      <React.Fragment>
        <Typography variant="h2">
          { `${ this.talkingWithDescription } ${ this.props.activeConversation }` }
        </Typography>
        {this.renderConversation()}
        {this.renderConversationInput()}
        {this.renderSubmitButton()}
      </React.Fragment>
    );
  }
}

const WrappedConversation = withPublisher(withStyles(styles)(Conversation));

export { WrappedConversation as Conversation };
