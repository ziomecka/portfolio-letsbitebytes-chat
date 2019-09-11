import { emitMessage } from './duck/';

const mapDispatchToProps = (dispatch: AppThunkDispatch<EmitAction>): MapSocketToProps => ({
  emitMessage: (message: string): Promise<EmitAction> => dispatch(emitMessage(message)),
});

export { mapDispatchToProps as mapSocketToProps };
