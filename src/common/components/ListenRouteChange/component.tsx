import * as React from 'react';

const { IS_BROWSER } = process.env;

const ListenRouteChange: React.FunctionComponent<ListenRouteChangeProps> = ({
  deactivateWaitForServer,
  history,
  removeHelper,
}) => {
  if (IS_BROWSER) {
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
