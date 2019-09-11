import * as React from 'react';

export const Socket: React.FunctionComponent<SocketProps> = ({ initiateConnection }) => {
  initiateConnection();

  return null;
};
