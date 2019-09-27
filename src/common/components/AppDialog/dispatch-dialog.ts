import {
  closeDialog,
  openDialog,
} from './duck/';

export const mapDispatchToDialog = (dispatch: ReduxDispatch): MapDispatchToDialog => ({
  openDialog: (props: OpenDialogProps): OpenDialogAction => dispatch(openDialog(props)),
  closeDialog: (): CloseDialogAction => dispatch(closeDialog()),
});

export { mapDispatchToDialog as mapDialogToDispatch };
