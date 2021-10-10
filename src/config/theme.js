import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
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
    }
  },
  shape: {borderRadius: '40px'},
});

export default theme