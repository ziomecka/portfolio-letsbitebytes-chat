import {
  activateWaitForServer,
  deactivateWaitForServer,
} from './duck/actions';

import {
  addHelper,
  closeDialog,
  openDialog,
  removeHelper,
} from './components';

export const mapWaitForServerToDispatch =
(dispatch: ReduxDispatch): MapWaitForServerToDispatch => ({
  activateWaitForServer: (): ActivateWaitForServerAction => dispatch(activateWaitForServer()),
  deactivateWaitForServer: (): DeactivateWaitForServerAction => dispatch(deactivateWaitForServer()),
});

export const mapHelperToDispatch =
(dispatch: ReduxDispatch): MapHelperToDispatch => ({
  addHelper: (props: AddHelperProps): AddHelperAction => dispatch(addHelper(props)),
  removeHelper: (): RemoveHelperAction => dispatch(removeHelper()),
});

export const mapDialogToDispatch = (dispatch: ReduxDispatch): MapDialogToDispatch => ({
  openDialog: (props: OpenDialogProps): OpenDialogAction => dispatch(openDialog(props)),
  closeDialog: (): CloseDialogAction => dispatch(closeDialog()),
});
