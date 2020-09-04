import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#451400',
    },
    secondary: {
      main: '#AC2318',
    },
  },
});
theme = responsiveFontSizes(theme, {
  breakpoints: ['sm', 'md', 'lg', 'xl'],
  factor: 2,
});
export default theme;
