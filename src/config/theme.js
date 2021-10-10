import { createTheme } from '@mui';

let theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#055A98',
    },
    secondary: {
      main: '#055A98',
    },
  },
  shape: {
    borderRadius: 4,
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});

export default theme;