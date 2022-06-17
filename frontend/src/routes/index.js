import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../pages/ NotFound';
import Erro from '../pages/Erro';
import Index from '../pages/IndexApp';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Index } />
            <Route
            path="/erro/:item"
            render={ (props) => <Erro { ...props } /> }
            />
            <Route component={ NotFound } />
        </Switch>
    </BrowserRouter>
)

export default Routes;