import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout';
import Home from './views/home'


ReactDOM.render(
  <React.StrictMode>
    <Layout page = "Controle de mesa">
      <Home />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);


