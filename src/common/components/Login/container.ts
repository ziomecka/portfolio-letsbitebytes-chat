import { Login } from './component';
import { connect } from 'react-redux';
import { login } from './duck/';
import { mapWaitForServerToDispatch } from '../../dispatch-common-actions';
import { withRouter } from 'react-router';

const mapStateToProps = ({
  user: { isAuthenticated, login, password },
  waitForServer,
}: AppState): MapStateToLogin => ({
  isAuthenticated,
  userLogin: login,
  userPassword: password,
  waitForServer,
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
