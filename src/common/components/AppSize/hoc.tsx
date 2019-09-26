import * as React from 'react';
import { Consumer } from './context';

export const withAppSize = <P extends object>(Component: React.ComponentType<P>) => (
  (props: P & WithAppSize): JSX.Element => (
    <Consumer>
      { ({ appSize }: WithAppSize): JSX.Element => (
        <Component { ...props } appSize={appSize} />
      )}
    </Consumer>
  )
);
