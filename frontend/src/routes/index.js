import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Erro from '../components/Erro';
import Index from '../components/Index';


const Routes = () => (
    
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Index } />
            <Route exact path="/erro" component={ Erro } />
            <Route
            path="/erro/:item"
            render={ (props) => <Erro { ...props } /> }
            />
        </Switch>
    </BrowserRouter>
)

export default Routes;