import { emitMessage } from './duck/';

const mapDispatchToProps = (dispatch: AppThunkDispatch<EmitMessageAction> ): SocketDispatch => ({
  emitMessage: (message: string): Promise<EmitMessageAction> => dispatch(emitMessage(message)),
});


export { mapDispatchToProps as socketDispatch };