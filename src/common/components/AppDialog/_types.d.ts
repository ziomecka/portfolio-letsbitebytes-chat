declare interface MapDispatchToDialog extends MapDialogToDispatch {}

declare interface MapStateToDialog extends DialogState {}

declare interface AppDialogProps extends MapStateToDialog, MapDispatchToDialog, WithStyles {}

declare const enum ButtonsVariants {
  none = 'none',
  ok = 'ok'
}

interface AppDialogProps extends MapStateToDialog, MapDispatchToDialog {}

declare type HtmlTag = 'p' | 'h2' | 'h3';

declare type DialogLine = [ string, HtmlTag? ];
declare type DialogContent = DialogLine[];
declare type DialogTitle = DialogLine[];

declare interface DialogState {
  open: boolean;
  closeButton: boolean;
  title: DialogTitle;
  content: DialogContent;
  buttonsVariant: ButtonsVariants;
}

declare type OpenDialogProps = &
{
  closeButton?: boolean;
  title: DialogTitle;
  content: DialogContent;
  buttonsVariant?: ButtonsVariants;
};

declare interface MapDialogToDispatch {
  openDialog(props?: OpenDialogProps): OpenDialogAction;
  closeDialog(): CloseDialogAction;
}
