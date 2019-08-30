import { Trainer } from './component';
import { connect } from 'react-redux';

const mapStateToProps = ( state: AppState ): TrainerState => ( {
  isAuthenticated: state.user.isAuthenticated,
  role: state.user.role,
} );

const Container = connect( mapStateToProps )( Trainer );

export { Container as Trainer };
