import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthAdminProvider } from './contexts/AuthAdminProvider';
import { AuthUserProvider } from './contexts/AuthUserProvider';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthAdminProvider>
    <AuthUserProvider>
      <App />
    </AuthUserProvider>
    </AuthAdminProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
