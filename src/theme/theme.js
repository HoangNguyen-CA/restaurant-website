import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#451400',
    },
    secondary: {
      main: '#894531',
    },
  },
});
theme = responsiveFontSizes(theme, { factor: 2 });
export default theme;
