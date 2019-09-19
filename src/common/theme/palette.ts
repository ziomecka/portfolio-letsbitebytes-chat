import createPalette from '@material-ui/core/styles/createPalette';

const palette = createPalette({
  common: {
    black: '#272932',
    white: '#fefefe',
  },
  background: {
    paper: '#fefefe',
    default: '#fefefe',
  },
  primary: {
    light: '#85a2bc',
    main: '#6a8eae',
    dark: '#57758f',
    contrastText: '#fefefe',
  },
  secondary: {
    light: '#bc8396',
    main: '#a96078',
    dark: '#963d5a',
    contrastText: '#fefefe',
  },
  error: {
    light: '#d3326d',
    main: '#ca054d',
    dark: '#a60540',
    contrastText: '#fefefe',
  },
  text: {
    primary: '#272932',
    secondary: '#616369',
    disabled: '#9c9da1',
    hint: '#c4c4c7',
  },
  grey: {
    '500': '#d9d9db',
  },
});

export { palette };
