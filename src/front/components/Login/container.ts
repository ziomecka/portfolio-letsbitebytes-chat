import { Login } from './component';
import { connect } from 'react-redux';
import { login } from './duck/async';
import { withRouter } from 'react-router';

const mapStateToProps = (state: AppState): MapStateToLogin => ({
  isAuthenticated: state.user.isAuthenticated,
  userLogin: state.user.login,
  userPassword: state.user.password,
});

const mapDispatchToProps = (dispatch: AppThunkDispatch<LoginActions> ): MapDispatchToLogin => ({
  login: (props: LoginActionProps): Promise<LoginActions> => dispatch(login(props)),
});

const Container = withRouter(connect<MapStateToLogin, MapDispatchToLogin, LoginProps>( mapStateToProps, mapDispatchToProps )( Login ));

export { Container as Login };