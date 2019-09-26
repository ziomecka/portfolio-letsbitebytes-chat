import * as React from 'react';

const defaultValue: WithAppSize = { appSize: AppSize.full };

const { Provider, Consumer } = React.createContext(defaultValue);

export { Provider, Consumer };
