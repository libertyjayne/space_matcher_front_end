import { createTheme } from '@mui/material/styles';
import './styles/variables.scss';

const theme = createTheme({
  palette: {
    common: {
      black: '#33333',
    },
    primary: {
      main: '#82BBFF',
    },
    secondary: {
      main: '#82F7FF',
    },
    success: {
      main: '#10B981',
    },
    orange: {
      main: '#FFAB91',
    },
    error: {
      main: '#FF9882',
    },
    warning: {
      main: '#FFFA82f',
    },
  },
  shape: { borderRadius: '40px' },
  typography: { fontFamily: 'Source Sans Pro' },
});

export default theme