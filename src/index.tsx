import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import theme from './theme/theme';
import { ThemeProvider } from 'styled-components';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,

  document.getElementById('root')
);