import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './App';
import { CounterProvider } from './providers/CounterProvider';
ReactDOM.render(
  <React.StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);