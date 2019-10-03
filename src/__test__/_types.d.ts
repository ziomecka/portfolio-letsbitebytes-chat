declare type BuildWrapperProps<P extends object> = {
  Component: React.ComponentType<P>;
  props: P;
  store?: import('redux').Store<PartialAppState>;
  theme?: import('@material-ui/core/styles').Theme;
};

declare interface Global extends NodeJS.Global {
  buildWrapper:<P extends object>(props: BuildWrapperProps<P>) => BuildWrapper<P>;
  React: unknown;
  mount: import('enzyme').EnzymeSelector;
  shallow: import('enzyme').EnzymeSelector;
  sinon: sinon.SinonStatic;
}

declare type BuildWrapper<P extends object> = {
  cleanUp(): void;
  component: import('enzyme').ReactWrapper;
  componentProps: P;
  wrapper: import('enzyme').ReactWrapper;
};
