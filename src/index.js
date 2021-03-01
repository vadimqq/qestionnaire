import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DataProvider } from './DataContext';

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <div className="container">
        <App />
      </div>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
