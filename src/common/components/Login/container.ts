import {
  mapHelperToDispatch,
  mapWaitForServerToDispatch,
} from '../../dispatch-common-actions';
import { Login } from './component';
import { connect } from 'react-redux';
import { login } from './duck/';
import { withRouter } from 'react-router';

const mapStateToProps = ({
  user: { isAuthenticated, login, password },
  waitForServer,
  helper: { helperText },
}: AppState): MapStateToLogin => ({
  isAuthenticated,
  userLogin: login,
  userPassword: password,
  waitForServer,
  helperText,
});

const mapDispatchToProps = (dispatch: AppThunkDispatch<LoginActions>): MapDispatchToLogin => ({
  login: (props: LoginActionProps): Promise<boolean> => dispatch(login(props)),
  ...mapWaitForServerToDispatch(dispatch),
  ...mapHelperToDispatch(dispatch),
});

const Container = withRouter(
  connect<MapStateToLogin, MapDispatchToLogin, LoginProps>(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);

export { Container as Login };
