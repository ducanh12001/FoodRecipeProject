import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import "antd/dist/antd.css";
import 'react-toastify/dist/ReactToastify.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

reportWebVitals();
