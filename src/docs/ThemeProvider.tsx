import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: 'rgb(17, 82, 147)',
      light: 'rgb(71, 145, 219)',
      main: '#1976d2',
    },
  },
  typography: {
    h1: {
      fontSize: 40,
      fontWeight: 400,
      letterSpacing: '0em',
      lineHeight: 1.167,
    },
    h2: {
      fontSize: 30,
      fontWeight: 400,
      letterSpacing: '0.007350em',
      lineHeight: 1.235,
    },
  },
});

const ThemeProvider: React.FC = ({ children }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);

export default ThemeProvider;
