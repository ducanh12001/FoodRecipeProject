import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    container,
  );
};


if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-console
  reportWebVitals(console.log);
}

