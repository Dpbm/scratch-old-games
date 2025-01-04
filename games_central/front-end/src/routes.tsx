import React  from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Game from './pages/Game';
import Play from './pages/Play';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={() => <Home />} />
                <Route path="/game/:id" component={() => <Game />} />
                <Route path="/play/:id" component={() => <Play />} />

                <Route path="*" component={() => <h1>Not found</h1>} />
            </Switch>
        </BrowserRouter>
    );
}