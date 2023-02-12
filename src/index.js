import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider, connect} from 'react-redux'
import { createStore } from 'redux';
import './index.css';
import 'tachyons'
import { store } from './containers/store';
import App from './containers/App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);



