import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Nav from './Components/Nav';
import Home from './Pages/Home';
import Performance from './Pages/Performance';
import Trades from './Pages/Trades';

const routes = [
    { to: '/', name: 'Home', component: <Home /> },
    { to: '/performance', name: 'Performance', component: <Performance /> },
    { to: '/trades', name: 'Trades', component: <Trades /> },
];

const App = (props) => {
    return (
        <div>
            <Nav data={routes} />

            <Switch>
                {routes.map((route) => (
                    <Route exact path={route.to}>
                        {route.component}
                    </Route>
                ))}
            </Switch>
        </div>
    );
};

export default App;
