import { Socket } from './component';
import { connect } from 'react-redux';
import { initiateSocket } from './duck/';

const mapStateToProps = (state: AppState): MapStateToSocket => ({
  login: state.user.login,
});

const mapDispatchToProps =
  (dispatch: AppThunkDispatch<EmitMessageAction>): MapDispatchToSocket => ({
    initiate: (): Promise<void> => dispatch(initiateSocket()),
  });

const container = connect(mapStateToProps, mapDispatchToProps)(Socket);

export { container as Socket };
