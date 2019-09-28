import * as React from 'react';

const { IS_BROWSER } = process.env;

const ListenRouteChange: React.FunctionComponent<ListenRouteChangeProps> = ({
  deactivateWaitForServer,
  history,
}) => {
  if (IS_BROWSER) {
    React.useEffect(() => (
      history.listen(() => {
        deactivateWaitForServer();
      })
    ));
  }

  return null;
};

export { ListenRouteChange };
