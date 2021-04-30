import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/layout';
import { isAuthenticated } from './config/auth';
import { useSelector } from 'react-redux';
import history from './config/history';

//Views
import Home from './views/home';
import Mesas from './views/mesa';
import Detalhes from './views/detalhes';
import Cardapio from './views/cardapio';
import Login from './views/login';
import Cadastro from './views/cadastro';
import Relatorio from './views/relatorio';

const AdminRoute = ({ ...data }) => {
  if (!isAuthenticated()) {
    return <Redirect to="/login" />;
  }

  const hasAdmin = Object.keys(data).includes('admin') && !data.admin;

  if (hasAdmin) {
    return <Redirect to="/" />;
  }

  return <Route {...data} />;
};

const Routers = () => {
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  return (
    <Router history={history}>
      <Layout page="Bistrô Carioca">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cardapio" component={Cardapio} />
          <Route exact path="/mesa" component={Mesas} />
          <Route exact path="/mesa/:id" component={Detalhes} />

          {/* ADMIN */}
          <AdminRoute
            exact
            path="/cadastro"
            admin={isAdmin}
            component={Cadastro}
          />

          <AdminRoute
            exact
            path="/relatorio"
            admin={isAdmin}
            component={Relatorio}
          />

          <Redirect from="*" to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routers;
