import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Layout from './components/layout/index';

//Views
import Mesas from './views/mesa'
import Detalhes from './views/detalhes'

const Routers =() => {
    return (

        <BrowserRouter>
           <Switch>
            <Layout page = "Controle de mesa">
                <Route exact path='/' component={Mesas} />
                <Route exact path='/mesa/:id' component={Detalhes} />
            </Layout>
           </Switch>
        </BrowserRouter>
    
)};

export default Routers;
