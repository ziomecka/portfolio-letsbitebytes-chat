import * as React from 'react';
import {
  Box,
  FormHelperText,
  Grid,
  List,
  ListItem,
  TextField,
  Typography,
} from '@material-ui/core';
import { AppButton } from '../';
import { HTML_CONVERSATION_ID } from '../../constants';
import { convertHtmlEntitiesToUnicode } from '../../utils/convert-html-entities-to-unicode';
import { styles } from './styles';
import texts from './texts';
import { withStyles } from '@material-ui/styles';

class Conversation extends React.Component<ConversationProps, ConversationState> {
  private conversationInputLabel: string;
  private errorMessage: string;
  private messageInitialState: string;
  private submitButtonLabel: string;
  private htmlConversationId: string;
  constructor (props: ConversationProps) {
    super(props);

    this.state = {
      conversation: this.getActiveConversation(),
      message: texts.messageInitialState,
      error: false,
    };

    this.init();
  }

  private init (): void {
    this.errorMessage = texts.errorMessage;
    this.messageInitialState = texts.messageInitialState;
    this.submitButtonLabel = texts.submitButton;
    this.conversationInputLabel = texts.conversationInputLabel;

    this.typeMessage = this.typeMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.sendMessageOnEnter = this.sendMessageOnEnter.bind(this);

    this.htmlConversationId = HTML_CONVERSATION_ID;
  }

  private getActiveConversation (conversations = this.props.conversations): Statement[] {
    const { activeConversation } = this.props;

    const conversation = Object.entries(conversations)
      .find(([key]) => key === activeConversation);

    return conversation ? conversation[ 1 ] : [];
  }

  public componentDidUpdate ({
    activeConversation: prevActiveConversation,
    conversations: prevConversations,
    connectionState: prevSocketConnection,
  }: ConversationProps): void {
    const {
      activeConversation,
      conversations,
      connectionState,
    } = this.props;

    if (activeConversation && activeConversation !== prevActiveConversation) {
      this.setState(() => ({
        conversation: this.getActiveConversation(),
      }), (): void => this.scroll('auto'));
    }

    if (conversations !== prevConversations) {
      const activeConversation = this.getActiveConversation();
      // todo -> set and scroll only if the active conversation has changed!
      this.setState(() => ({
        conversation: [...activeConversation],
      }), this.scroll);
    }

    if (connectionState !== prevSocketConnection) {
      this.setState({
        error: connectionState === ConnectionState.disconnected,
      });
    }
  }

  private scroll (behavior: 'smooth' | 'auto' = 'smooth'): void {
    const $conversation = document.querySelector(`#${ this.htmlConversationId }`);

    $conversation && $conversation.scroll({
      top: $conversation.scrollHeight,
      behavior,
    });
  }

  private typeMessage (event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      message: event.target.value,
    });
  }

  private async sendMessage (): Promise<EmitAction> {
    const {
      props: { connectionState },
      state: { message },
    } = this;

    if (connectionState === ConnectionState.connected && message !== '') {
      try {
        this.setState({ message: this.messageInitialState });

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
      event.preventDefault();
      this.sendMessage();
    }
  }

  public render (): JSX.Element {
    return (
      <Grid
        container
        component={Box}
      >
        {this.renderConversation()}
        {this.props.activeConversation && this.renderConversationInput()}
      </Grid>
    );
  }

  private renderConversation (): JSX.Element {
    const {
      state: { conversation = [] },
      props: { classes },
    } = this;

    const partnerTypo = `${ classes.typographyBox } ${ classes.partnerTypography }`;
    const userTypo = `${ classes.typographyBox } ${ classes.userTypography }`;

    return (
      <Grid
        item
        xs={12}
        component={Box}
        className={classes.mainBox}
        container
        direction="column"
        justify="flex-end"
      >
        <Grid
          container
          item
          component={List}
          id={ this.htmlConversationId }
          alignItems="flex-end"
          className={`${ classes.conversationBox } ${ classes.scrollBar }`}
        >
          { conversation.map(([ messageId, message, isDelivered ]) => {
            const isUser = isDelivered !== undefined;

            let typoClass = classes.typography;
            let itemClass = '';

            if (isUser) {
              typoClass += ` ${ userTypo }`;
              itemClass += classes.userListItem;
            } else {
              typoClass += ` ${ partnerTypo }` +
                ` ${ isDelivered ? classes.delivered : classes.undelivered }`;
            }

            return (
              <ListItem
                key={ messageId }
                disableGutters
                className={ itemClass }
              >
                <Typography
                  variant="body2"
                  component="span"
                  classes={{ root: typoClass }}
                >
                  { convertHtmlEntitiesToUnicode(message) }
                </Typography>
              </ListItem>
            );
          }) }
        </Grid>
      </Grid>
    );
  }

  private renderConversationInput (): JSX.Element {
    const {
      props: { classes },
      state: { error, message },
    } = this;

    return (
      <Grid
        container
        alignItems="flex-end"
        className={classes.messageBox}
      >
        <Grid item xs={8}>
          <TextField
            autoFocus
            multiline
            onChange={this.typeMessage}
            placeholder={this.conversationInputLabel}
            value={message}
            FormHelperTextProps={{
              style: {
                position: 'absolute',
              },
            }}
            InputProps={{
              classes: {
                root: classes.inputBox,
              },
            }}
          />
        </Grid>
        <Grid
          item
          container
          xs={4}
          justify="flex-end"
        >
          <AppButton
            buttonProps={{ onClick: this.sendMessage }}
            variant={AppButtonVariant.flex}
          >
            {this.submitButtonLabel}
          </AppButton>
        </Grid>
        { error && (
          <FormHelperText error>
            { this.errorMessage }
          </FormHelperText>
        )}
      </Grid>
    );
  }
}

const WrappedConversation = withStyles(styles)(Conversation);

export { WrappedConversation as Conversation };
