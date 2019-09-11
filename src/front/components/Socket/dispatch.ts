import {
  clearConversationsAction,
  emitMessage,
} from './duck/';

const mapDispatchToProps = (dispatch: AppThunkDispatch<SocketActions>): MapSocketToProps => ({
  emitMessage: (message: string): Promise<EmitAction> => dispatch(emitMessage(message)),
  clearConversations: (): Promise<ClearConversationsAction> => (
    // todo correct types because Promise is useless here
    Promise.resolve(dispatch(clearConversationsAction()))
  ),
});

export { mapDispatchToProps as mapSocketToProps };
