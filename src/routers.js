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
// import Cadastro from './views/cadastro;

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
          <Route exact path="/cardapio" component={Cardapio} />
          <Route exact path="/login" component={Login} />

          {/* ADMIN */}
          {/* <AdminRoute exact path='/cadastro' admin={isAdmin} component={Cadastro} /> */}
          <AdminRoute exact path="/mesa" admin={isAdmin} component={Mesas} />
          <AdminRoute
            exact
            path="/mesa/:id"
            admin={isAdmin}
            component={Detalhes}
          />

          <Redirect from="*" to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routers;
