import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CountContextProvider } from './contexts/count.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountContextProvider>
      <App />
    </CountContextProvider>
  </React.StrictMode>
);
