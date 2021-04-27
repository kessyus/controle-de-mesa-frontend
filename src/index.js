// imports
import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './routers';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './assets/globalStyle';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Routers />
  </Provider>,
  document.getElementById('root')
);
