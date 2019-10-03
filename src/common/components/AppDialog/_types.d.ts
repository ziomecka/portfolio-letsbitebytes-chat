declare interface MapDispatchToDialog {
  closeDialog(): CloseDialogAction;
}

declare interface MapStateToDialog extends DialogState {}

declare interface AppDialogProps extends MapStateToDialog, MapDispatchToDialog, WithStyles {}

declare const enum ButtonsVariants {
  none = 'none',
  ok = 'ok'
}

interface AppDialogProps extends MapStateToDialog, MapDispatchToDialog {
  DialogProps?: Partial<import('@material-ui/core/Dialog').DialogProps>;
}

declare type HtmlTag = 'p' | 'h2' | 'h3';

declare type DialogLine = [ string, HtmlTag? ];
declare type DialogContent = DialogLine[];
declare type DialogTitle = DialogLine[];

declare interface DialogState {
  open: boolean;
  title: DialogTitle;
  content: DialogContent;
  buttonsVariant: ButtonsVariants;
}

declare type OpenDialogProps = &
{
  title: DialogTitle;
  content: DialogContent;
  buttonsVariant?: ButtonsVariants;
};
