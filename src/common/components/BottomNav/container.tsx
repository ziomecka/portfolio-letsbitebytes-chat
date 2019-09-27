import { BottomNav } from './component';
import { connect } from 'react-redux';

const mapStateToProps = ({ waitForServer }: AppState): MapStateToBottomNav => ({
  waitForServer,
});

const Container = connect(mapStateToProps)(BottomNav);

export { Container as BottomNav };
