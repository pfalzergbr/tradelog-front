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
import NewTrade from './Pages/NewTrade';
import NotFound from './Pages/NotFound';

//DUMMY VARIABLES, SWAP with a real context
const isAuth = true;
const userId = `1`;

const publicLinks = [
    { to: '/', name: 'Home' },
    { to: '/user/login', name: 'Log In' },
    { to: '/user/register', name: 'Register'},
];

const authLinks = [
    { to: `/${userId}/dashboard`, name: 'Dashboard' },
    {
        to: `/${userId}/profile`,
        name: 'Profile',
    },
    { to: `/${userId}/trades`, name: 'Trades' },
    { to: `/${userId}/newTrade`, name: 'New Trade' },
];

const publicRoutes = (
    <Switch>
        <Route exact path='/'>
            <Landing />
        </Route>
        <Route path='/user/register'>
            <Register />
        </Route>
        <Route path='/user/login'>
            <Login />
        </Route>
    </Switch>
);

const authRoutes = (
    <Switch>
        <Route exact path='/'>
            <Landing />
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
    </Switch>
);

const App = (props) => {
    return (
        <div>
            <Nav data={isAuth ? authLinks : publicLinks} />
            {isAuth ? authRoutes : publicRoutes}
            
        </div>
    );
};

export default App;
