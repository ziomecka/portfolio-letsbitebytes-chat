declare type OpenDialogAction = ReduxAction & Partial<DialogState>;
declare type CloseDialogAction = ReduxAction;
declare type ClearDialogAction = ReduxAction & Partial<DialogState>;

declare const enum DialogActionTypes {
  close = '@APP/Dialog/close dialog',
  clear = '@APP/Dialog/clear dialog',
  open = '@APP/Dialog/open dialog',
}

declare type DialogActions = |
  OpenDialogAction |
  CloseDialogAction |
  ClearDialogAction;
