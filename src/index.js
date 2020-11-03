import React, { Suspense }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import {Provider} from "react-redux";
import store   from "./Store";
import './i18n';

ReactDOM.render(
    <Provider store={store}>
    <Suspense fallback={(<div>Loading</div>)}>
    <App />
    </Suspense>
    </Provider>
  ,document.getElementById('root')
);
serviceWorker.unregister();