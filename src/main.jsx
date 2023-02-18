import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { ThemeProvider } from './Context/ColorTheme';
import { UserContextProvider } from './Context/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
