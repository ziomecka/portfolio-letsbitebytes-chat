import { AnyAction } from 'redux';
import { NotificationsButton } from './component';
import { connect } from 'react-redux';
import { getNotification } from './duck';
import { mapDialogToDispatch } from '../';

const mapStateToProps = (state: AppState): MapStateToNotificationsButton => ({
  actualNotifications: state.notifications.actual,
  dialogOpened: state.dialog.open,
});

const mapDispatchToProps =
(dispatch: AppThunkDispatch<AnyAction>): MapDispatchToNotificationsButton => ({
  ...mapDialogToDispatch(dispatch),
  getNotification: (): Promise<OpenDialogProps> => dispatch(getNotification()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(NotificationsButton);

export { Container as NotificationsButton };
