import { Logout } from './component';
import { addNotification } from '../../duck/';
import { connect } from 'react-redux';
import { logout } from './duck/async';
import { mapWaitForServerToDispatch } from '../../dispatch-common-actions';
import { withRouter } from 'react-router';

const mapStateToProps = ({
  user: { isAuthenticated },
  waitForServer,
} : AppState): MapStateToLogout => ({
  isAuthenticated,
  waitForServer,
});

const mapDispatchToProps = (dispatch: AppThunkDispatch<LogoutActions>): MapDispatchToLogout => ({
  logout: (): Promise<boolean> => dispatch(logout()),
  addNotification: (props): AddNotificationAction => dispatch(addNotification(props)),
  ...mapWaitForServerToDispatch(dispatch),
});

const Container = withRouter(
  connect<MapStateToLogout, MapDispatchToLogout, Partial<LogoutProps>>(
    mapStateToProps,
    mapDispatchToProps,
  )(Logout)
);

export { Container as Logout };
