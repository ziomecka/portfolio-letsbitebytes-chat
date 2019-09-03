const flexRow = {
  display: 'flex'
};

const flexColumn = {
  ...flexRow,
  flexDirection: 'column'
};

const flexColumnJustifyFlexStart = {
  ...flexColumn,
  justifyContent: 'flex-start'
};

const flexColumnJustifySpaceBetween = {
  ...flexColumn,
  justifyContent: 'space-between'
};

const flexColumnJustifyFlexStartAlignCenter = {
  ...flexColumnJustifyFlexStart,
  alignItems: 'center'
};

const flexColumnJustifyFlexStartAlignLeft = {
  ...flexColumnJustifyFlexStart,
  alignItems: 'left'
};

const flexRowJustifyCenter = {
  ...flexRow,
  justifyContent: 'center'
};

const flexRowJustifyCenterAlignCenter = {
  ...flexRowJustifyCenter,
  alignItems: 'center'
};

const flexRowJustifyFlexEnd = {
  ...flexRow,
  justifyContent: 'flex-end'
};

const flexRowJustifyFlexEndAlignCenter = {
  ...flexRowJustifyFlexEnd,
  alignItems: 'center'
};

const flexRowJustifyFlexStart = {
  ...flexRow,
  justifyContent: 'flex-start'
};

const flexRowJustifyFlexStartAlignCenter = {
  ...flexRowJustifyFlexStart,
  alignItems: 'center'
};

export {
  flexColumn,
  flexColumnJustifyFlexStart,
  flexColumnJustifyFlexStartAlignCenter,
  flexColumnJustifyFlexStartAlignLeft,
  flexColumnJustifySpaceBetween,
  flexRow,
  flexRowJustifyCenter,
  flexRowJustifyCenterAlignCenter,
  flexRowJustifyFlexEnd,
  flexRowJustifyFlexEndAlignCenter,
  flexRowJustifyFlexStart,
  flexRowJustifyFlexStartAlignCenter
};
