import { Socket } from './component';
import { connect } from 'react-redux';
import { initiateConnection } from './duck/';

const mapStateToProps = (): MapStateToSocket => ({});

const mapDispatchToProps =
  (dispatch: AppThunkDispatch<EmitAction>): MapDispatchToSocket => ({
    initiateConnection: (): Promise<void> => dispatch(initiateConnection()),
  });

const Container = connect(mapStateToProps, mapDispatchToProps)(Socket);

export { Container as Socket };
