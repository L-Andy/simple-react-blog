import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App.js'
import 'assets/css/w3.css'
import Theme from 'theme/index';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


