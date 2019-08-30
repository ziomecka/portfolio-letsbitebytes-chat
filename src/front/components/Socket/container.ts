import {
  emitMessage,
  initiateSocket,
} from './duck/';
import { Socket } from './component';
import { connect } from 'react-redux';

const mapStateToProps = (state: AppState): MapStateToSocket => ({
  login: state.user.login
});

const mapDispatchToProps = (dispatch: AppThunkDispatch<EmitMessageAction> ): MapDispatchToSocket => ({
  initiate: (): Promise<void> => dispatch(initiateSocket()),
  // emitMessage: (props: SocketMessageRequest): Promise<EmitMessageAction> => dispatch(emitMessage(props)),
});

const container = connect(mapStateToProps, mapDispatchToProps)(Socket);

export { container as Socket };