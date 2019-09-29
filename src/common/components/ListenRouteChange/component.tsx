import * as React from 'react';
import { isBrowser } from '../../constants';

const ListenRouteChange: React.FunctionComponent<ListenRouteChangeProps> = ({
  deactivateWaitForServer,
  history,
  removeHelper,
}) => {
  if (isBrowser) {
    React.useEffect(() => (
      history.listen(() => {
        deactivateWaitForServer();
        removeHelper();
      })
    ));
  }

  return null;
};

export { ListenRouteChange };
