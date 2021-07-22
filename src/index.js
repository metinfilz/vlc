import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import {store} from './store'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
