import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import './assets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { title } from '../configs.js';

document.title = title;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);