import { Login } from './component';
import { connect } from 'react-redux';
import { login } from './duck/';
import { mapWaitForServerToDispatch } from '../../dispatch-common-actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state: AppState): MapStateToLogin => ({
  isAuthenticated: state.user.isAuthenticated,
  userLogin: state.user.login,
  userPassword: state.user.password,
  waitForServer: state.waitForServer,
});

const mapDispatchToProps = (dispatch: AppThunkDispatch<LoginActions>): MapDispatchToLogin => ({
  login: (props: LoginActionProps): Promise<boolean> => dispatch(login(props)),
  ...mapWaitForServerToDispatch(dispatch),
});

const Container = withRouter(
  connect<MapStateToLogin, MapDispatchToLogin, LoginProps>(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);

export { Container as Login };
