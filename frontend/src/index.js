import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RoleProvider } from './context/RoleContext';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <RoleProvider>
      <App />
    </RoleProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
