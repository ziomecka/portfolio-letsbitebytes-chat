import {
  clearDialog,
  closeDialog,
  openDialog,
} from './duck/';

export const mapDispatchToDialog = (dispatch: ReduxDispatch): MapDispatchToDialog => ({
  openDialog: (props: OpenDialogProps): OpenDialogAction => dispatch(openDialog(props)),
  closeDialog: (): CloseDialogAction => dispatch(closeDialog()),
  clearDialog: (): ClearDialogAction => dispatch(clearDialog()),
});

export { mapDispatchToDialog as mapDialogToDispatch };
