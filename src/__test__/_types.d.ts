declare interface Global extends NodeJS.Global {
  React: unknown;
  mount: import('enzyme').EnzymeSelector;
  shallow: import('enzyme').EnzymeSelector;
  sinon: sinon.SinonStatic;
}

declare type BuildWrapper<P extends object> = {
  wrapper: import('enzyme').ReactWrapper;
  component: import('enzyme').ReactWrapper;
  componentProps: P;
};
