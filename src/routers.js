import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/layout/index';

//Views
import Home from './views/home';
import Mesas from './views/mesa';
import Detalhes from './views/detalhes';
import Cardapio from './views/cardapio';

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout page="Bistrô Carioca">
          <Route exact path="/" component={Home} />
          <Route exact path="/mesa" component={Mesas} />
          <Route exact path="/mesa/:id" component={Detalhes} />
          <Route exact path="/cardapio" component={Cardapio} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
