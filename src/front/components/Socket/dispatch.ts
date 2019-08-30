import { emitMessage } from './duck/';

const mapDispatchToProps = (dispatch: AppThunkDispatch<EmitMessageAction> ): SocketDispatch => ({
  emitMessage: (props: SocketMessageRequest): Promise<EmitMessageAction> => dispatch(emitMessage(props)),
});


export { mapDispatchToProps as socketDispatch };