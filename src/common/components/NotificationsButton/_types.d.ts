declare interface MapStateToNotificationsButton {
  actualNotifications: NotificationsList;
  dialogOpened: boolean;
}

declare interface MapDispatchToNotificationsButton extends MapDialogToDispatch {
  getNotification(): Promise<OpenDialogProps>;
}

declare interface MapDispatchToNotificationsButtonProps extends MapDispatchToDialog {}

declare interface NotificationsButtonState {
  svgAnimation: string;
  isAnimationWaiting: boolean;
}

declare interface NotificationsButtonProps extends
MapStateToNotificationsButton,
MapDispatchToNotificationsButton,
WithStyles {}
