declare interface MapWaitForServerToDispatch {
  activateWaitForServer(): ActivateWaitForServerAction;
  deactivateWaitForServer(): DeactivateWaitForServerAction;
}

declare interface MapHelperToDispatch {
  addHelper(props: AddHelperProps): AddHelperAction;
  removeHelper(): RemoveHelperAction;
}

declare interface MapDialogToDispatch {
  openDialog(props?: OpenDialogProps): OpenDialogAction;
  closeDialog(): CloseDialogAction;
}