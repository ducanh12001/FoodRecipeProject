// @ts-nocheck
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { store } from './store';
import App from './containers/App';
import 'antd/dist/antd.css';
import './assets/sass/main.scss';
import { throttle } from 'lodash';
import { saveState } from './services/persist.service';
import ReactDOM from 'react-dom';


const MOUNT_NODE = document.getElementById('root');

store.subscribe(
  throttle(() => {
    saveState({
      global: store.getState().global,
    });
  }, 1000),
);

createRoot(MOUNT_NODE).render(
  <Provider store={store}>
    <App />
  </Provider>
);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    MOUNT_NODE,
  );
};


if (module.hot) {
  module.hot.accept('./containers/App', () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render()
  });
}


if (process.env.NODE_ENV === 'development') {
  reportWebVitals(console.log);
}
