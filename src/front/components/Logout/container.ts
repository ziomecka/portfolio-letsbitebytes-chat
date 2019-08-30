import { Logout } from './component';
import { connect } from 'react-redux';
import { logout } from './duck/async';
import { withRouter } from 'react-router';

const mapStateToProps = (state: AppState): MapStateToLogout => ({
  isAuthenticated: state.user.isAuthenticated,
});

const mapDispatchToProps = (dispatch: AppThunkDispatch<LogoutActions> ): MapDispatchToLogout => ({
  logout: (): Promise<LogoutActions> => dispatch(logout()),
});

// @ts-ignore
const Container = withRouter(connect( mapStateToProps, mapDispatchToProps )( Logout ));

export { Container as Logout };