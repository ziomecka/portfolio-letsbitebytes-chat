import { ProtectedRoute } from './component';
import { connect } from 'react-redux';

const mapStateToProps = ( state: AppState ): ProtectedRouteState => ( {
  isAuthenticated: state.user.isAuthenticated,
  login: state.user.login,
  role: state.user.role,
} );

const Container = connect( mapStateToProps )( ProtectedRoute );

export { Container as ProtectedRoute };
