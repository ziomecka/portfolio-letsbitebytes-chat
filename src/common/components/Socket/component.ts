import * as React from 'react';

export class Socket extends React.Component<SocketProps> {
  constructor (props: SocketProps) {
    super(props);
    props.initiateConnection();
  }

  public componentWillUnmount (): void {
    this.props.closeConnection();
  }

  public render (): JSX.Element {
    return null;
  }
};
