import * as React from 'react';
import { ChatBox } from '../';
import { ConversationBox } from './ConversationBox/';
import { HTML_CONVERSATION_ID } from '../../constants';
import { MessageBox } from './MessageBox';
import texts from './texts';
import update from 'immutability-helper';

class Conversation extends React.Component<ConversationProps, ConversationState> {
  private htmlConversationId: string;
  private texts: Record<string, string>
  constructor (props: ConversationProps) {
    super(props);

    this.state = {
      conversation: this.getActiveConversation(),
      message: texts.messageInitialState,
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
        conversation: update([] as Statement[], { $set: activeConversation }),
      }), this.scroll);
    }

    if (connectionState !== prevSocketConnection) {
      if (connectionState === ConnectionState.disconnected) {
        this.props.addHelper({ helperText: this.texts.connectionError });
      } else {
        this.props.removeHelper();
      }
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
      texts,
    } = this;

    this.props.removeHelper();

    if (connectionState === ConnectionState.connected && message !== '') {
      try {
        this.setState({ message: this.texts.messageInitialState });
        return await this.props.emitMessage(message);
      } catch {
        this.props.addHelper({ helperText: texts.emitError });
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
      state,
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
        <ConversationBox conversation={state.conversation} />
        {
          activeConversation && (
            <MessageBox
              TextFieldProps={{
                onChange: this.typeMessage,
                onKeyDown: this.sendMessageOnEnter,
                value: state.message,
              }}
              ButtonProps={{ onClick: this.sendMessage }}
            />
          )
        }
      </ChatBox>
    );
  }
}

export { Conversation };
