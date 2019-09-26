import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import points from './breakpoints-constants';

export const breakpoints = createBreakpoints({
  keys: [ 'xs', 'sm', 'md', 'lg', 'xl' ],
  values: {
    'xs': 0,
    'sm': points.SM,
    'md': points.MD,
    'lg': points.LG,
    'xl': points.XL,
  },
});
