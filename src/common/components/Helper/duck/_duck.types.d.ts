declare const enum HelperActionTypes {
  addHelper = '@APP/Helper/add helper',
  removeHelper = '@APP/Helper/remove helper',
}

declare type HelperType = 'error' | 'message';

declare interface HelperState {
  helperText: string;
  helperType?: HelperType;
}

declare interface AddHelperProps extends HelperState {}
declare interface RemoveHelperProps extends HelperState {}

declare interface AddHelperAction extends ReduxAction, AddHelperProps {}
declare interface RemoveHelperAction extends ReduxAction {}

declare type HelperActions = |
  AddHelperAction |
  RemoveHelperAction;
