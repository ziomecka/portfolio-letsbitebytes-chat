import {
  activateWaitForServer,
  addHelper,
  deactivateWaitForServer,
  removeHelper,
} from './duck/actions';

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
