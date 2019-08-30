import * as React from 'react';

export const Socket: React.FunctionComponent<SocketProps> = ({ initiate }) => {
  initiate();

  return null;
};