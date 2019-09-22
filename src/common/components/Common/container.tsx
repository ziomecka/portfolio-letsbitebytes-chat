import { Common } from './component';
import { connect } from 'react-redux';

const mapStateToProps = (state: AppState): MapStateToCommon => ({
  login: state.user.login,
});

const Container = connect(mapStateToProps)(Common);

export { Container as Common };
