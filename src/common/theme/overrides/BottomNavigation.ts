import { Overrides } from '@material-ui/core/styles/overrides';

const BottomNavigation = ({
  appNavHeight,
  largeSpacing,
}: AppTheme): Overrides => {
  return {
    MuiBottomNavigation: {
      root: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: appNavHeight,
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        padding: `0 ${ largeSpacing }px`,
        backgroundColor: 'transparent',
      },
    },
  };
};

export { BottomNavigation };
