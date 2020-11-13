import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import { AuthContext } from '../Context/MainContext';
import Nav from '../Components/Nav';
import Dashboard from '../Pages/Dashboard';
import Performance from '../Pages/Performance';
import Trades from '../Pages/Trades';
import Landing from '../Pages/Landing';
import TradeDetails from '../Pages/TradeDetails';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Profile from '../Pages/Profile';
import Accounts from '../Pages/Accounts';
import Strategies from '../Pages/Strategies';
import NewTrade from '../Pages/NewTrade';
import NotFound from '../Pages/NotFound';

import DummyLogin from '../dummyData/dummyLogin';

const App = (props) => {
    const { isAuth, user, login, logout } = useContext(AuthContext);

    const publicLinks = [
        { to: '/', name: 'Home' },
        { to: '/user/login', name: 'Log In' },
        { to: '/user/register', name: 'Register' },
    ];

    const authLinks = [
        { to: `/${user && user.userId}/dashboard`, name: 'Dashboard' },
        { to: `/${user && user.userId}/profile`, name: 'Profile' },
        { to: `/${user && user.userId}/trades`, name: 'Trades' },
        { to: `/${user && user.userId}/newTrade`, name: 'New Trade' },
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
            <Route>
                <NotFound />
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
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );

    return (
        <React.Fragment>
            <Nav data={isAuth ? authLinks : publicLinks} user={user}/>
            {isAuth ? authRoutes : publicRoutes}
        </React.Fragment>
    );
};

export default App;
