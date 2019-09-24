declare interface MapDispatchToDialog extends MapDialogToDispatch {}

declare interface MapStateToDialog extends DialogState {}

declare interface AppDialogProps extends MapStateToDialog, MapDispatchToDialog, WithStyles {}

declare const enum ButtonsVariants {
  none = 'none',
  ok = 'ok'
}

interface AppDialogProps extends MapStateToDialog, MapDispatchToDialog {}

declare interface DialogState {
  open: boolean;
  closeButton: boolean;
  title: string;
  content: string;
  buttonsVariant: ButtonsVariants;
}

declare type OpenDialogProps = &
{
  closeButton?: boolean;
  title: string;
  content: string;
  buttonsVariant?: ButtonsVariants;
};

declare interface MapDialogToDispatch {
  openDialog(props?: OpenDialogProps): OpenDialogAction;
  closeDialog(): CloseDialogAction;
  clearDialog(props?: OpenDialogProps): ClearDialogAction;
}
