import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { loadUser } from '../Redux/Actions/authActions'
import { loadAccounts } from '../Redux/Actions/accountActions'
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
import AccountDetails from '../Pages/AccountDetails';
import NotFound from '../Pages/NotFound';


const AppRouter = (props) => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.authReducer);
    const { token, user } = auth

    //Links to display if there is no logged in user. Feeds into the Navbar components as props
    const publicLinks = [
        { to: '/', name: 'Home' },
        { to: '/user/login', name: 'Log In' },
        { to: '/user/register', name: 'Register' },
    ];

    //Links to display if the user is logged in. Feeds into the Navbar components as props
    const authLinks = [
        { to: `/${user && user.userId}/dashboard`, name: 'Dashboard' },
        // { to: `/${user && user.userId}/profile`, name: 'Profile' },
        { to: `/${user && user.userId}/trades`, name: 'Trades' },
    ];

    //Routes to display if there is no logged in user.
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

    //Routes if there is a user logged in.
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
            <Route path='/:userId/accounts/:accountId'>
            <AccountDetails />
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
            <Route path='/:userId/trades/'>
                <Trades />
            </Route>
            <Route path='/trade/:tradeId'>
                <TradeDetails />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );

    //Loading user from local storage, if any
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData && userData.user && userData.token) {
            dispatch(loadUser(userData));
            dispatch(loadAccounts(userData));
        }
    }, []);

    return (
        <div className="app">
            <Nav data={token && user ? authLinks : publicLinks} user={user} />
            <div className="container main-container">{token && user ? authRoutes : publicRoutes}</div>
        </div>
    );
};

export default AppRouter;
