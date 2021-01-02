import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadUser } from '../Redux/Actions/authActions';
import { loadUserData } from '../Redux/Actions/loadActions';

import Nav from '../Pages/Shared/Nav';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Landing from '../Pages/Landing/Landing';
import TradeDetails from '../Pages/Trades/TradeDetails';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Profile from '../Pages/Profile/Profile';
import Accounts from '../Pages/Accounts/Accounts';
import Strategies from '../Pages/Accounts/Strategies/Strategies';
import AccountDetails from '../Pages/Accounts/AccountDetails';
import NotFound from '../Pages/Shared/NotFound';
import Strategy from '../Pages/Accounts/Strategies/Strategy';
const API = process.env.REACT_APP_API;

const AppRouter = props => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
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
    { to: `/${user && user.userId}/accounts`, name: 'Accounts' },
  ];

  //Routes to display if there is no logged in user.
  const publicRoutes = (
    <Switch>
      <Route exact={true} path='/'>
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
      <Route exact={true} path='/'>
        <Landing />
      </Route>
      <Route path='/:userId/dashboard'>
        <Dashboard />
      </Route>
      <Route path='/:userId/profile'>
        <Profile />
      </Route>
      <Route exact={true} path='/:userId/accounts'>
        <Accounts />
      </Route>
      <Route path='/:userId/accounts/:accountId'>
        <AccountDetails />
      </Route>
      <Route exact={true} path='/:userId/strategies'>
        <Strategies />
      </Route>
      <Route path='/:userId/strategies/:strategyId'>
        <Strategy />
      </Route>
      <Route path='/trade/:tradeId'>
        <TradeDetails />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );

  // Loading user from local storage, if any
  useEffect(() => {
    const populateUserData = async token => {
      try {
        dispatch(
          loadUserData({
            url: `${API}/api/user/userData`,
            auth: { Authorization: `Bearer ${token}` },
          }),
        );
      } catch (error) {
        console.log(error);
      }
    };

    if (token) {
      populateUserData(token);
    }
  }, [token, dispatch]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.user && userData.token) {
      dispatch(loadUser(userData));
    }
  }, [dispatch]);

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
