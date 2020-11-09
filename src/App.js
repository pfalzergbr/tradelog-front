import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Nav from './Components/Nav';
import Dashboard from './Pages/Dashboard';
import Performance from './Pages/Performance';
import Trades from './Pages/Trades';
import Landing from './Pages/Landing';
import TradeDetails from './Pages/TradeDetails';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import Accounts from './Pages/Accounts';
import Strategies from './Pages/Strategies';
import NewTrade from './Pages/NewTrade'

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
                <Route path='/user/register'>
                    <Register />
                </Route>
                <Route path='/user/login'>
                    <Login />
                </Route>
                <Route path='/:userId/dashboard'>
                    <Dashboard />
                </Route>
                <Route path='/:userId/profile'>
                    <Profile />
                </Route>
                <Route path='/:userId/accounts'>
                    <Accounts />
                </Route>
                <Route path='/:userId/Strategies'>
                    <Strategies />
                </Route>
                <Route path='/:userId/performance'>
                    <Performance />
                </Route>
                <Route path='/:userId/trades'>
                    <Trades />
                </Route>
                <Route path='/:userId/newTrade'>
                    <NewTrade />
                </Route>
                <Route path='/trade/:tradeId'>
                    <TradeDetails />
                </Route>
                <Route exact path='/'>
                    <Landing />
                </Route>
            </Switch>
        </div>
    );
};

export default App;
