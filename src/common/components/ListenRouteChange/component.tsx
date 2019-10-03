import * as React from 'react';
import { isBrowser } from '../../constants';

const ListenRouteChange: React.FunctionComponent<ListenRouteChangeProps> = ({
  deactivateWaitForServer,
  helperText,
  history,
  removeHelper,
}) => {
  if (isBrowser) {
    React.useEffect(() => (
      history.listen(() => {
        deactivateWaitForServer();
        helperText && removeHelper();
      })
    ));
  }

  return null;
};

export { ListenRouteChange };
