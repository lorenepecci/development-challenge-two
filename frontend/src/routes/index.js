import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from '../components/Index';
import Erro from '../components/Erro';


const Routes = () => (
    
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Index } />
            <Route exact path = "/erro" component={Erro} />
        </Switch>
    </BrowserRouter>
)

export default Routes;