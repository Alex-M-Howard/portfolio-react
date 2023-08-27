import {createTheme} from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      primary: '#000000',
      secondary: '#ffffff',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgba(0,0,0,0.8)',
    },
    secondary: {
      main: '#f48fb1',
    },
    text: {
      primary: '#ffffff',
      secondary: '#222222',
    },
    background: {
      default: '#4b4b4b',
      paper: '#3c6464',
    }
  },
});

export {lightTheme, darkTheme};
