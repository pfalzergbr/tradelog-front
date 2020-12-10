import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadUser } from '../Redux/Actions/authActions';
import { loadUserData } from '../Redux/Actions/accountActions';
import { loadStrategies } from '../Redux/Actions/strategyActions';


import Nav from '../Pages/Shared/Nav';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Trades from '../Pages/Trades/Trades';
import Landing from '../Pages/Landing/Landing';
import TradeDetails from '../Pages/Trades/TradeDetails';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Profile from '../Pages/Profile/Profile';
import Accounts from '../Pages/Accounts/Accounts';
import Strategies from '../Pages/Strategies/Strategies';
import AccountDetails from '../Pages/Accounts/AccountDetails';
import NotFound from '../Pages/Shared/NotFound';
const API = process.env.REACT_APP_API;


const AppRouter = (props) => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.authReducer);
    const { token, user } = auth;

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
    // TODO - Make accounts and strategies load from the backend, only user info from local storage
    useEffect(() => {
        const populateUserData = async (token) => {
            try {
                dispatch(loadUserData({url: `${API}/api/user/userData`, auth: {Authorization: `Bearer ${token}`}}));
                // dispatch(loadStrategies(userData))
            } catch (error) {
                console.log(error);   
            }
        }
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData && userData.user && userData.token) {
            dispatch(loadUser(userData));
            populateUserData(token);
        }
    }, [token, dispatch]);

    return (
        <div className='app'>
            <Nav data={token && user ? authLinks : publicLinks} user={user} />
            <div className='container main-container'>
                {token && user ? authRoutes : publicRoutes}
            </div>
        </div>
    );
};

export default AppRouter;
