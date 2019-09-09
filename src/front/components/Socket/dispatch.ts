import { emitMessage } from './duck/';

const mapDispatchToProps = (dispatch: AppThunkDispatch<EmitMessageAction>): MapSocketToProps => ({
  emitMessage: (message: string): Promise<EmitMessageAction> => dispatch(emitMessage(message)),
});

export { mapDispatchToProps as mapSocketToProps };
