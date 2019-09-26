import * as React from 'react';
import { APP_ROOT_ID } from '../../constants';
import { Provider } from './context';
import { breakpoints } from './constants';

const { IS_BROWSER } = process.env;

class AppSizeProvider extends React.PureComponent<AppSizeProviderProps, AppSizeProviderState> {
  constructor (props: object) {
    super (props);
    this.state = { appSize: this.initAppSize };
  }

  private isBrowser = IS_BROWSER;
  private parentNode = IS_BROWSER ? document.getElementById(APP_ROOT_ID) : null;
  private breakpoints = breakpoints;

  public componentDidMount (): void {
    if (this.isBrowser) {
      window.addEventListener('resize', this.onChange);
    }
  }

  public componentWillUnmount (): void {
    if (this.isBrowser) {
      window.removeEventListener('resize', this.onChange);
    }
  }

  private get parentWidth (): number {
    return this.parentNode
      ? (this.parentNode as HTMLElement).getBoundingClientRect().width
      : null;
  };

  private get appSize (): AppSize {
    return (this.parentWidth >= this.breakpoints.get(AppSize.full))
      ? AppSize.full
      : AppSize.compact;
  };

  private get initAppSize (): AppSize {
    if (this.isBrowser) {
      return this.appSize;
    } else {
      return AppSize.full;
    }
  };

  public onChange = (): void => {
    this.setState({ appSize: this.appSize });
  };

  public render (): JSX.Element {
    return (
      <Provider value={{ appSize: this.state.appSize }}>
        { this.props.children }
      </Provider>
    );
  }
}

export { AppSizeProvider };
