export const addHelper: ReduxActionCreator<AddHelperAction> =
({ helperText, helperType }: AddHelperProps) => ({
  type: HelperActionTypes.addHelper,
  helperText,
  helperType,
});

export const removeHelper: ReduxActionCreator<RemoveHelperAction> =
() => ({
  type: HelperActionTypes.removeHelper,
});
