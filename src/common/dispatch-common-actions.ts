import {
  activateWaitForServer,
  deactivateWaitForServer,
} from './duck/actions';

export const mapWaitForServerToDispatch =
(dispatch: ReduxDispatch): MapWaitForServerToDispatch => ({
  activateWaitForServer: (): ActivateWaitForServerAction => dispatch(activateWaitForServer()),
  deactivateWaitForServer: (): DeactivateWaitForServerAction => dispatch(deactivateWaitForServer()),
});
});
