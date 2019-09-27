import {
  activateWaitForServer,
  deactivateWaitForServer,
} from './duck/actions';

export const mapWaitForServerToDispatch =
(dispatch: ReduxDispatch): MapWaitForServerToDispatch => ({
  activateWaitForServer: (): ReduxAction => dispatch(activateWaitForServer()),
  deactivateWaitForServer: (): ReduxAction => dispatch(deactivateWaitForServer()),
});
