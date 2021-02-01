import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AllSearchResultProvider } from './context/context';


ReactDOM.render(
  <React.StrictMode>
    <AllSearchResultProvider>
      <App />
    </AllSearchResultProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
