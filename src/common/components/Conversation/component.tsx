import * as React from 'react';
import { ChatBox } from '../';
import { ConversationBox } from './ConversationBox/';
import { FormHelperText } from '@material-ui/core';
import { HTML_CONVERSATION_ID } from '../../constants';
import { MessageBox } from './MessageBox';
import texts from './texts';

class Conversation extends React.Component<ConversationProps, ConversationState> {
  private htmlConversationId: string;
  private texts: Record<string, string>
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
    this.htmlConversationId = HTML_CONVERSATION_ID;
    this.texts = texts;

    this.typeMessage = this.typeMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.sendMessageOnEnter = this.sendMessageOnEnter.bind(this);
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
        this.setState({ message: this.texts.messageInitialState });

        return await this.props.emitMessage(message);
      } catch {
        // TODO
        console.log('Something went wrong'); // eslint-disable-line no-console
      }
    }
  }

  private sendMessageOnEnter (event: React.KeyboardEvent<HTMLElement>): void {
    if (event.key.toLowerCase() === 'enter') {
      event.preventDefault();
      this.sendMessage();
    }
  }

  public render (): JSX.Element {
    const {
      props: { activeConversation },
      state: { error },
      texts,
    } = this;

    const heading = activeConversation
      ? `${ texts.activeConversationHeading } <span>${ activeConversation }</span>`
      : texts.noActiveConversationHeading;

    return (
      <ChatBox
        GridProps={{ style: { flex: '1 0 0' } }}
        boldHeading={true}
        heading={heading}
      >
        <ConversationBox conversation={this.state.conversation} />
        {
          activeConversation && (
            <MessageBox
              TextFieldProps={{
                onChange: this.typeMessage,
                onKeyDown: this.sendMessageOnEnter,
                value: this.state.message,
              }}
              ButtonProps={{ onClick: this.sendMessage }}
            />
          )
        }
        { error && (
          <FormHelperText
            error
            style={{ position: 'absolute', bottom: '-3rem' }}
          >
            { texts.errorMessage }
          </FormHelperText>
        )}
      </ChatBox>
    );
  }
}

export { Conversation };
