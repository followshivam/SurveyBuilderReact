import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import {Provider} from "react-redux";
import {store, persistor}   from "./Store";
import {PersistGate} from "redux-persist/integration/react";


ReactDOM.render(
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
  ,document.getElementById('root')
);
serviceWorker.unregister();