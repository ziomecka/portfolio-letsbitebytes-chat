import * as React from 'react';
import { MockedProvider } from './MockedProvider';
import { MockedTheme } from './MockedTheme';
import { createMount } from '@material-ui/core/test-utils';

export const buildWrapper = (
  ((<P extends object>(wrapperProps: BuildWrapperProps<P>): BuildWrapper<P> => {
    const { Component, props, store, theme } = wrapperProps;

    const mount = createMount();

    const wrapper = mount(
      <MockedProvider store={store}>
        <MockedTheme theme={theme}>
          <Component {...props} />
        </MockedTheme>
      </MockedProvider>
    );

    const component = wrapper.find(Component);
    const componentProps = component.props();

    return {
      cleanUp: mount.cleanUp,
      wrapper,
      component,
      componentProps,
    };
  }))
);
