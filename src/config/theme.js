import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    common: {
      black: '#33333',
    },
    primary: {
      main: '#673AB7',
    },
    secondary: {
      main: '#2196f3',
    },
    success: {
      main: '#00E676',
    },
    orange: {
      main: '#FFAB91',
    },
    error: {
      main: '#F44336',
    },
    warning: {
      main: '#ffe57f',
    },
  },
  shape: {borderRadius: '40px'},
  typography: {fontFamily: "Source Sans Pro"},
});

export default theme