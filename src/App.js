import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from './Components/Nav';
import Dashboard from './Pages/Dashboard';
import Performance from './Pages/Performance';
import Trades from './Pages/Trades';
import Landing from './Pages/Landing';
import TradeDetails from './Pages/TradeDetails';

const userId = `1`;
const routes = [
    { to: '/', name: 'Landing', component: <Landing /> },
    { to: `/${userId}/dashboard`, name: 'Dashboard', component: <Dashboard /> },
    {
        to: `/${userId}/performance`,
        name: 'Performance',
        component: <Performance />,
    },
    { to: `/${userId}/trades`, name: 'Trades', component: <Trades /> },
];

const App = (props) => {
    return (
        <div>
            <Nav data={routes} />

            <Switch>
                <Route exact path='/'>
                    <Landing />
                </Route>
                <Route path='/:userId/dashboard'>
                    <Dashboard />
                </Route>
                <Route path='/:userId/performance'>
                    <Performance />
                </Route>
                <Route path='/:userId/trades'>
                    <Trades />
                </Route>
                <Route path='/trade/:tradeId'>
                    <TradeDetails />
                </Route>
            </Switch>
        </div>
    );
};

export default App;
