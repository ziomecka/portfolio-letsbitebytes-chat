import { ListenRouteChange } from './component';
import { connect } from 'react-redux';
import { mapWaitForServerToDispatch } from '../../dispatch-common-actions';
import { withRouter } from 'react-router';

const mapStateToProps = (): object => ({});

const mapDispatchToProps = (dispatch: ReduxDispatch): MapDispatchToListenRouteChange => ({
  ...mapWaitForServerToDispatch(dispatch),
});

const Container = withRouter(connect(mapStateToProps, mapDispatchToProps)(ListenRouteChange));

export { Container as ListenRouteChange };
