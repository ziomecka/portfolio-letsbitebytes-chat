import {
  mapHelperToDispatch,
  mapWaitForServerToDispatch,
} from '../../dispatch-common-actions';
import { ListenRouteChange } from './component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const mapStateToProps = ({ helper: { helperText } }: AppState): MapStateToListenRouteChange => ({
  helperText,
});

const mapDispatchToProps = (dispatch: ReduxDispatch): MapDispatchToListenRouteChange => ({
  ...mapHelperToDispatch(dispatch),
  ...mapWaitForServerToDispatch(dispatch),
});

const Container = withRouter(connect(mapStateToProps, mapDispatchToProps)(ListenRouteChange));

export { Container as ListenRouteChange };
