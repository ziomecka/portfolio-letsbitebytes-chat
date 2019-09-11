import * as React from 'react';
import {
  Box,
  FormHelperText,
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
  error: boolean;
}

const CONVERSATION_INPUT_LABEL = 'What would you like to say?';
const ERROR_MESSAGE = 'Disconnected. Please wait for connection.';
const MESSAGE_INITIAL_STATE = '';
const SUBMIT_BUTTON_LABEL = 'Send';
const TALKING_WITH_DESCRIPTION = 'You are talking with';

const KEYBOARD_EVENT = 'keydown';

class Conversation extends React.Component<ConversationProps, ConversationState> {
  private conversationInputLabel: string;
  private errorMessage: string;
  private keyboardEvent: string;
  private messageInitialState: string;
  private submitButtonLabel: string;
  private talkingWithDescription: string;
  private unsubscribe: () => void;

  private conversationBoxClassName: string;
  private inputBoxClassName: string;
  private inputClassName: string;
  private partnerTypographyClassName: string;
  private userTypographyClassName: string;
  private typographyBoxClassName: string;
  private typographyClassName: string;
  private deliveredClassName: string;
  private undeliveredClassName: string;
  constructor (props: ConversationProps) {
    super(props);

    this.state = {
      conversation: this.getActiveConversation(),
      message: MESSAGE_INITIAL_STATE,
      error: false,
    };

    this.init();
  }

  private init (): void {
    this.errorMessage = ERROR_MESSAGE;
    this.messageInitialState = MESSAGE_INITIAL_STATE;
    this.submitButtonLabel = SUBMIT_BUTTON_LABEL;
    this.conversationInputLabel = CONVERSATION_INPUT_LABEL;
    this.talkingWithDescription = TALKING_WITH_DESCRIPTION;

    this.typeMessage = this.typeMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.sendMessageOnEnter = this.sendMessageOnEnter.bind(this);

    this.keyboardEvent = KEYBOARD_EVENT;
    this.unsubscribe = this.props.subscribe(this.keyboardEvent, this.sendMessageOnEnter);

    const { classes: {
      box,
      conversationBox,
      input,
      inputBox,
      partnerTypography,
      userTypography,
      typography,
      typographyBox,
      delivered,
      undelivered,
    } } = this.props;

    this.conversationBoxClassName = conversationBox;
    this.inputClassName = input;
    this.inputBoxClassName = inputBox;
    this.partnerTypographyClassName = `${ box } ${ partnerTypography }`;
    this.userTypographyClassName = `${ box } ${ userTypography }`;
    this.typographyBoxClassName = typographyBox;
    this.typographyClassName = typography;
    this.deliveredClassName = delivered;
    this.undeliveredClassName = undelivered;
  }

  private getActiveConversation (conversations = this.props.conversations): Statement[] {
    const { activeConversation } = this.props;

    const conversation = Object.entries(conversations)
      .find(([key]) => key === activeConversation);

    return conversation ? conversation[ 1 ] : [];
  }

  public componentDidUpdate (prevProps: ConversationProps): void {
    const {
      activeConversation,
      conversations,
      connectionState,
    } = this.props;

    const {
      activeConversation: prevActiveConversation,
      conversations: prevConversations,
      connectionState: prevSocketConnection,
    } = prevProps;

    if (activeConversation && activeConversation !== prevActiveConversation) {
      this.setState({
        conversation: this.getActiveConversation(),
      });
    }

    if (conversations !== prevConversations) {
      const activeConversation = this.getActiveConversation();
      this.setState({
        conversation: [...activeConversation],
      });
    }

    if (connectionState !== prevSocketConnection) {
      this.setState({
        error: connectionState === ConnectionState.disconnected,
      });
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
      deliveredClassName,
      undeliveredClassName,
      state: { conversation = [] },
    } = this;

    return (
      <Box className={ conversationBoxClassName }>
        { conversation.map((statement, index) => {
          const isDelivered = statement[ 2 ];
          const isUser = statement[ 2 ] !== undefined;

          const typoClassName =
            typographyClassName +
            ` ${ isUser ? userTypographyClassName : partnerTypographyClassName }` +
            ` ${ isUser && isDelivered ? deliveredClassName : '' }` +
            ` ${ isUser && !isDelivered ? undeliveredClassName : '' }`;

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
    const { state: { error, message } } = this;

    return (
      <Box>
        <TextField
          autoFocus
          multiline
          onChange={this.typeMessage}
          placeholder={this.conversationInputLabel}
          value={message}
          className={this.inputBoxClassName}
          InputProps={{ className: this.inputClassName }}
        />
        { error && (
          <FormHelperText error>
            { this.errorMessage }
          </FormHelperText>
        )}
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

  private async sendMessage (): Promise<EmitAction> {
    const { state: { message } } = this;
    if (message !== '') {
      try {
        this.setState({
          message: this.messageInitialState,
        });

        return await this.props.emitMessage(message);
      } catch {
        // TODO
        console.log('Something went wrong'); // eslint-disable-line no-console
      }
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
