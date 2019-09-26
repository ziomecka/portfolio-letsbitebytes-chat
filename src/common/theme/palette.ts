import createPalette from '@material-ui/core/styles/createPalette';

const palette = createPalette({
  common: {
    black: '#272932', // black
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
    '900': '#3a3c44',
    '800': '#4e4f57',
    '700': '#616369',
    '600': '#75767c',
    '500': '#898a8f',
    '400': '#9c9da1',
    '300': '#b0b1b4',
    '200': '#c4c4c7',
    '100': '#d7d8d9',
  },
});

export { palette };
