import { Logout } from './component';
import { addNotification } from '../../duck/';
import { connect } from 'react-redux';
import { logout } from './duck/async';
import { withRouter } from 'react-router';

const mapStateToProps = (state: AppState): MapStateToLogout => ({
  isAuthenticated: state.user.isAuthenticated,
});

const mapDispatchToProps = (dispatch: AppThunkDispatch<LogoutActions>): MapDispatchToLogout => ({
  logout: (): Promise<boolean> => dispatch(logout()),
  addNotification: (props): AddNotificationAction => dispatch(addNotification(props)),
});

const Container = withRouter(
  connect<MapStateToLogout, MapDispatchToLogout, Partial<LogoutProps>>(
    mapStateToProps,
    mapDispatchToProps,
  )(Logout)
);

export { Container as Logout };
