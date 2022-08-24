import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import './assets/styles/index.css';
import App from './App';
import store from './redux';

import 'bootstrap/dist/css/bootstrap.css';

const persistor = persistStore(store)	// 추가
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);