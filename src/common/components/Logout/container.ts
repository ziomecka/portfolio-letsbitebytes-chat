import {
  mapHelperToDispatch,
  mapWaitForServerToDispatch,
} from '../../dispatch-common-actions';
import { Logout } from './component';
import { connect } from 'react-redux';
import { logout } from './duck/async';
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
  ...mapWaitForServerToDispatch(dispatch),
  ...mapHelperToDispatch(dispatch),
});

const Container = withRouter(
  connect<MapStateToLogout, MapDispatchToLogout, Partial<LogoutProps>>(
    mapStateToProps,
    mapDispatchToProps,
  )(Logout)
);

export { Container as Logout };
