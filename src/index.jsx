import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { App } from './containers/app';
import './normalize.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import allReducers from './reducers';
import reducer from './store/reducers/questions'

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
