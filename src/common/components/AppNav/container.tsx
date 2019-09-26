import { AppNav } from './component';
import { connect } from 'react-redux';

const mapStateToProps = (state: AppState): MapStateToAppNav => ({
  login: state.user.login,
});

const Container = connect(mapStateToProps)(AppNav);

export { Container as AppNav };
