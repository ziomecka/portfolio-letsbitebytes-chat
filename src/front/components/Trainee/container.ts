import { Trainee } from './component';
import { connect } from 'react-redux';

const mapStateToProps = (state: AppState): TraineeProps => ({
  isAuthenticated: state.user.isAuthenticated,
  role: state.user.role,
  conversations: state.conversations,
});

const Container = connect(mapStateToProps)(Trainee);

export { Container as Trainee };
