declare type OpenDialogAction = ReduxAction & Partial<DialogState>;
declare type CloseDialogAction = ReduxAction;

declare const enum DialogActionTypes {
  close = '@APP/Dialog/close dialog',
  open = '@APP/Dialog/open dialog',
}

declare type DialogActions = |
  OpenDialogAction |
  CloseDialogAction;
