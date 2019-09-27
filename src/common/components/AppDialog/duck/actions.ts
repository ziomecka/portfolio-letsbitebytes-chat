export const openDialog: ReduxActionCreator<OpenDialogAction> = (props: OpenDialogProps) => ({
  type: DialogActionTypes.open,
  ...props,
});

export const closeDialog: ReduxActionCreator<CloseDialogAction> = () => ({
  type: DialogActionTypes.close,
});
