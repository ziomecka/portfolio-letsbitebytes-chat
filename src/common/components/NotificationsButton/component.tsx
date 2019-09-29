import * as React from 'react';
import { IconButton } from '@material-ui/core';
import { PriorityHigh as NotificationIcon } from '@material-ui/icons';
import { isBrowser } from '../../constants';
import { styles } from './styles';
import { withStyles } from '@material-ui/styles';

class NotificationsButton extends
  React.Component<NotificationsButtonProps, NotificationsButtonState> {
  private animationRemoveTimeout: number;
  private isBrowser: boolean;
  constructor (props: NotificationsButtonProps) {
    super(props);

    this.state = {
      isAnimationWaiting: props.dialogOpened,
      svgAnimation: '',
    };

    this.init();
  }

  private init (): void {
    this.animationRemoveTimeout = 2005;
    this.isBrowser = isBrowser;
  }

  public componentDidMount (): void {
    if (this.isBrowser) {
      const {
        props: { actualNotifications, classes },
      } = this;

      this.setState({
        svgAnimation: (actualNotifications.length
          ? classes.shake
          : ''),
      });
    }
  }

  public componentDidUpdate ({
    dialogOpened: prevDialogOpened,
    actualNotifications: prevActualNotifications,
  }: NotificationsButtonProps): void {
    const {
      actualNotifications: { length },
      dialogOpened,
    } = this.props;


    // animate if new message has arrived
    if (length > prevActualNotifications.length) {
      this.animateIcon();
    }

    // if there is still a message then, delay the animation till the dialog is closed
    if (length < prevActualNotifications.length && length) {
      if (dialogOpened) {
        this.setState({ isAnimationWaiting: true });
      } else {
        this.animateIcon();
      }
    }

    // animate if dialog has been closed and a message is waiting
    if (dialogOpened !== prevDialogOpened && !dialogOpened && this.state.isAnimationWaiting) {
      this.animateIcon();
      this.setState({ isAnimationWaiting: false });
    }
  }

  public animateIcon (): void {
    this.setState(() => ({
      svgAnimation: this.props.classes.shake,
    }), this.removeAnimationClassName);
  }

  public removeAnimationClassName (): void {
    setTimeout(
      () => this.setState({ svgAnimation: '' }),
      this.animationRemoveTimeout
    );
  }

  public onClick = async (): Promise<void> => {
    const dialogProps = await this.props.getNotification();
    this.props.openDialog(dialogProps);
  };

  public render (): JSX.Element {
    const { props: { classes, actualNotifications } } = this;

    return (!!actualNotifications.length &&
      <IconButton
        onClick={this.onClick}
        color="secondary"
      >
        <NotificationIcon
          color="secondary"
          classes={{ root: `${ classes.svg } ${ this.state.svgAnimation }` }}
        />
      </IconButton>
    );
  }
};

const WrappedComponent = withStyles(styles)(NotificationsButton);

export { WrappedComponent as NotificationsButton };
