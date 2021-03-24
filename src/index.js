import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './routers'
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './assets/globalStyle'



ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <Routers />
  </React.Fragment>,
  document.getElementById('root')
);


