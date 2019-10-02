import {
  closeConnection,
  initiateConnection,
} from './duck/';
import { Socket } from './component';
import { connect } from 'react-redux';

const mapStateToProps = (): MapStateToSocket => ({});

const mapDispatchToProps =
  (dispatch: AppThunkDispatch<EmitAction>): MapDispatchToSocket => ({
    initiateConnection: (): Promise<void> => dispatch(initiateConnection()),
    closeConnection: (): void => closeConnection(),
  });

const Container = connect(mapStateToProps, mapDispatchToProps)(Socket);

export { Container as Socket };
